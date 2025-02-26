const StudentProp = ({ name, age, kind, url }) => {
  return (
    <>
      <h1>学生姓名：{name}</h1>
      <h2>学生年龄：{age}</h2>
      <h2>学生学科：{kind}</h2>
      <h2>
        学生头像：
        <img src={url}></img>
      </h2>
    </>
  );
};

export default StudentProp;
