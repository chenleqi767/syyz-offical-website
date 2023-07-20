def merge_dicts(list_of_dicts):
    merged_dict = {}  # 创建一个空字典作为结果

    for dictionary in list_of_dicts:
        for key, value in dictionary.items():
            merged_dict[key] = value  # 将键值对添加到结果字典中

    return merged_dict

# 测试
my_list = [{"参数1": "大小1"}, {"参数a": "颜色b"}]
merged_dict = merge_dicts(my_list)
print(merged_dict)