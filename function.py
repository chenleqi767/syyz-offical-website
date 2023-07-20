import sqlite3

# 创建一个函数用来获取数据库链接
def get_db_connection():
    # 创建数据库链接到database.db文件
    conn = sqlite3.connect('sqlite.db')
    # 设置数据的解析方法，有了这个设置，就可以像字典一样访问每一列数据
    conn.row_factory = sqlite3.Row
    return conn

def row_to_list(insta):
    l=[]
    for i in insta:
        d=dict(i)
        l.append(d)
    return l

def merge_dicts(list_of_dicts):
    merged_dict = {}  # 创建一个空字典作为结果

    for dictionary in list_of_dicts:
        key = dictionary['key']
        value = dictionary['value']
        merged_dict[key] = value  # 将键值对添加到结果字典中

    return merged_dict


class home_page():
    def __init__(self):
        pass
    def get_teachers(self):
        conn = get_db_connection()
        teachers=conn.execute("SELECT * FROM teachers").fetchall()
        conn.close
        teachers=row_to_list(teachers)
        return teachers
    def get_content(self):
        conn=get_db_connection()
        content=conn.execute("SELECT key,value FROM content").fetchall()
        conn.close()
        content = row_to_list(content)
        content = merge_dicts(content)
        return content


print(home_page.get_content(115))
