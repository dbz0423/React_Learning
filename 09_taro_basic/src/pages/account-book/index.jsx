import { View, Text, Picker } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import {
  AtInput,
  AtSegmentedControl,
  AtList,
  AtListItem,
  AtForm,
  AtButton,
} from "taro-ui";
import "./index.scss";

export default function AccountBook() {
  const handleSubmit = () => {
    if (!form.amount || !/^\d+(\.\d{1,2})?$/.test(form.amount)) {
      Taro.showToast({ title: "请输入有效金额", icon: "none" });
      return;
    }

    const newRecord = {
      id: Date.now(),
      ...form,
      amount: parseFloat(form.amount),
      date: new Date().toLocaleString(),
    };

    setRecords((prev) => {
      const newRecords = [newRecord, ...prev];
      Taro.setStorageSync("accountRecords", newRecords);
      return newRecords;
    });

    setForm({
      amount: "",
      type: "expense",
      category: "餐饮",
      note: "",
    });
  };

  const [records, setRecords] = useState(() => {
    try {
      return Taro.getStorageSync("accountRecords") || [];
    } catch (e) {
      return [];
    }
  });
  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "餐饮",
    note: "",
  });

  const categories = ["餐饮", "交通", "购物", "住房", "娱乐"];

  return (
    <View className="account-book-container">
      <Text className="page-title">记账本</Text>
      <View className="form-section">
        <AtSegmentedControl
          values={["支出", "收入"]}
          current={form.type === "expense" ? 0 : 1}
          onClick={(value) =>
            setForm({ ...form, type: value === 0 ? "expense" : "income" })
          }
        />

        <AtForm>
          <AtInput
            name="amount"
            type="number"
            placeholder="输入金额"
            value={form.amount}
            onChange={(value) => setForm({ ...form, amount: value })}
          />

          <Picker
            mode="selector"
            range={categories}
            onChange={(e) =>
              setForm({ ...form, category: categories[e.detail.value] })
            }
          >
            <AtInput
              name="category"
              disabled
              value={form.category}
              placeholder="选择分类"
            />
          </Picker>

          <AtInput
            name="note"
            placeholder="备注信息"
            value={form.note}
            onChange={(value) => setForm({ ...form, note: value })}
          />
        </AtForm>

        <AtButton type="primary" style={{ height: 150 }} onClick={handleSubmit}>
          提交记录
        </AtButton>
      </View>
      <AtList>
        {records.map((record) => (
          <AtListItem
            key={record.id}
            title={`¥${record.amount.toFixed(2)}`}
            note={`${record.category} ${record.note || ""}`}
            extraText={record.type === "income" ? "收入" : "支出"}
            arrow="right"
          />
        ))}
        {records.length === 0 && <AtListItem title="暂无记账记录" />}
      </AtList>
    </View>
  );
}
