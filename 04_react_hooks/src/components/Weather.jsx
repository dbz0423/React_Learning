// import { useEffect, useState } from "react";

// const Weather = () => {
//   const [data, setData] = useState(null); // 初始值为 null
//   const [error, setError] = useState(null); // 用于存储错误信息

//   // 使用 useEffect
//   useEffect(() => {
//     // 执行 fetch 请求，从 API 获取数据
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=Nanjing&appid=f6d0289b25ad9726e43c7c29e0dd48de"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("网络请求失败，状态码：" + response.status);
//         }
//         return response.json(); // 将响应数据解析为 JSON
//       })
//       .then((json) => {
//         setData(json); // 将解析后的数据设置到状态中
//         setError(null); // 清除错误信息
//       })
//       .catch((error) => {
//         setError(error.message); // 捕获错误并存储错误信息
//         setData(null); // 确保数据状态为空
//       });
//   }, []); // 空依赖数组，表示这个 effect 只在组件挂载时执行一次

//   // 数据加载中或出错时的处理
//   if (error) {
//     return <div>加载失败：{error}</div>;
//   }
//   if (!data) {
//     return <div>加载中...</div>;
//   }

//   // 数据加载成功，渲染数据
//   return (
//     <div>
//       <h1>{data.name} 的天气</h1>
//       <p>
//         坐标：经度 {data.coord.lon}, 纬度 {data.coord.lat}
//       </p>
//       <p>
//         天气：{data.weather[0].main} ({data.weather[0].description})
//       </p>
//       <p>温度：{(data.main.temp - 273.15).toFixed(1)} ℃</p>
//       <p>体感温度：{(data.main.feels_like - 273.15).toFixed(1)} ℃</p>
//       <p>湿度：{data.main.humidity}%</p>
//       <p>风速：{data.wind.speed} m/s</p>
//       <p>云量：{data.clouds.all}%</p>
//       <p>日出时间：{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
//       <p>日落时间：{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
//     </div>
//   );
// };

// export default Weather;

import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Nanjing"); // 当前输入的城市，默认为南京
  const [data, setData] = useState(null); // 存储天气数据
  const [error, setError] = useState(null); // 存储错误信息

  // 使用 useEffect 监听 city 的变化，并重新获取天气数据
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6d0289b25ad9726e43c7c29e0dd48de`
        );

        if (!response.ok) {
          throw new Error("城市未找到或网络请求失败");
        }

        const json = await response.json();
        setData(json); // 更新天气数据
        setError(null); // 清除错误信息
      } catch (error) {
        setError(error.message); // 捕获错误并存储错误信息
        setData(null); // 清空天气数据
      }
    };

    // 如果城市名称为空，不进行请求
    if (city.trim()) {
      fetchWeather();
    }
  }, [city]); // 依赖项为 city，当 city 发生变化时重新请求

  // 处理输入框的变化
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // 渲染组件
  return (
    <div style={containerStyle}>
      <h1>天气查询</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="输入城市名称"
        style={inputStyle}
      />
      {error && <p style={errorStyle}>{error}</p>}
      {!data && !error && <p style={loadingStyle}>加载中...</p>}

      {data && (
        <div style={weatherCardStyle}>
          <h2>{data.name} 的天气</h2>
          <p>
            坐标：经度 {data.coord.lon}, 纬度 {data.coord.lat}
          </p>
          <p>
            天气：{data.weather[0].main} ({data.weather[0].description})
          </p>
          <p>温度：{(data.main.temp - 273.15).toFixed(1)} ℃</p>
          <p>体感温度：{(data.main.feels_like - 273.15).toFixed(1)} ℃</p>
          <p>湿度：{data.main.humidity}%</p>
          <p>风速：{data.wind.speed} m/s</p>
          <p>云量：{data.clouds.all}%</p>
          <p>
            日出时间：{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p>
            日落时间：{new Date(data.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};

// 样式定义
const containerStyle = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  textAlign: "center",
};

const inputStyle = {
  width: "80%",
  padding: "10px",
  fontSize: "16px",
  marginBottom: "20px",
  border: "2px solid #ccc",
  borderRadius: "4px",
};

const errorStyle = {
  color: "red",
  marginTop: "10px",
};

const loadingStyle = {
  color: "gray",
  marginTop: "10px",
};

const weatherCardStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default Weather;
