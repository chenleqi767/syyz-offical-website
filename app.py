from flask import Flask,render_template
import sqlite3
import function

app = Flask(__name__)


# content={
#     "location":"here",
#     "title":"以教育之强 夯实国家富强之基——学习贯彻习近平新时代中国",
#     "summary":"党委副书记、初中部执行校长郑永生讲授了题为《以教育之强 夯实国家富强之基》的主题党课。",
#     "date":"2023-01-01",
#     "html":"为深入开展学习贯彻习近平新时代中国特色社会主义思想主题教育，6月28日上午，我校党委副书记、初中部执行校长郑永生在初中部319会议室向第二党支部全体党员，讲授了题为《以教育之强 夯实国家富强之基》的主题党课。",
#
# }

# 创建一个函数用来获取数据库链接
def get_db_connection():
    # 创建数据库链接到database.db文件
    conn = sqlite3.connect('sqlite.db')
    # 设置数据的解析方法，有了这个设置，就可以像字典一样访问每一列数据
    conn.row_factory = sqlite3.Row
    return conn



@app.route("/")
def index():
    teachers = function.home_page.get_teachers(self=1)
    content = function.home_page.get_content(1145)
    return render_template("home.html",teachers=teachers,content=content)


if __name__ == '__main__':
    app.run(debug=True,host="0.0.0.0")
