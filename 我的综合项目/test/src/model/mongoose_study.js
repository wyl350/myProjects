const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/2020年8月23日test', { useNewUrlParser: true })
  .then(() => console.log('数据库 连接成功'))
  .catch(err => console.log(err, '数据库 连接失败'));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
}))



// 集合规则限制条件：
// 		type: String,
// 		required: [true, '请传入文章标题'],
// 		minlength: [2, '文章长度不能小于2'],
// 		maxlength: [5, '文章长度最大不能超过5'],
// 		trim: true
// 		min: 18,
// 		max: 100
// 		default: Date.now
// 		enum: {
// 			values: ['html', 'css', 'javascript', 'node.js'],
// 			message: '分类名称要在一定的范围内才可以'
//    }
// 		validate: {
// 			validator: v => {
// 				// 返回布尔值
// 				// true 验证成功
// 				// false 验证失败
// 				// v 要验证的值
// 				return v && v.length > 4
// 			},
// 			// 自定义错误信息
// 			message: '传入的值不符合验证规则'
// 		}



// 举例：
// const postSchema = new mongoose.Schema({
// 	title: {
// 		type: String,
// 		// 必选字段
// 		required: [true, '请传入文章标题'],
// 		// 字符串的最小长度
// 		minlength: [2, '文章长度不能小于2'],
// 		// 字符串的最大长度
// 		maxlength: [5, '文章长度最大不能超过5'],
// 		// 去除字符串两边的空格
// 		trim: true
// 	},
// 	age: {
// 		type: Number,
// 		// 数字的最小范围
// 		min: 18,
// 		// 数字的最大范围
// 		max: 100
// 	},
// 	publishDate: {
// 		type: Date,
// 		// 默认值
// 		default: Date.now
// 	},
// 	category: {
// 		type: String,
// 		// 枚举 列举出当前字段可以拥有的值
// 		enum: {
// 			values: ['html', 'css', 'javascript', 'node.js'],
// 			message: '分类名称要在一定的范围内才可以'
// 		}
// 	},
// 	author: {
// 		type: String,
// 		validate: {
// 			validator: v => {
// 				// 返回布尔值
// 				// true 验证成功
// 				// false 验证失败
// 				// v 要验证的值
// 				return v && v.length > 4
// 			},
// 			// 自定义错误信息
// 			message: '传入的值不符合验证规则'
// 		}
// 	}
// });







// 实例化文档
const course = new Course({
  name: 'node.js基础',
  author: '黑马讲师',
  isPublished: true
});



// 条件限制：

// 举例：
// Course.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result))
// 查询用户集合中年龄字段大于20并且小于40的文档
// Course.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result))
// 查询用户集合中hobbies字段值包含足球的文档
// Course.find({hobbies: {$in: ['足球']}}).then(result => console.log(result))
// 选择要查询的字段
// Course.find().select('name email -_id').then(result => console.log(result))
// 根据年龄字段进行升序排列
// Course.find().sort('age').then(result => console.log(result))
// 根据年龄字段进行降序排列
// Course.find().sort('-age').then(result => console.log(result))
// 查询文档跳过前两条结果 限制显示3条结果
// Course.find().skip(2).limit(3).then(result => console.log(result))


// 多条数据操作
// 增加
// Course.create(course)
//   .then(result => console.log('保存成功' + result))
//   .catch(err => console.log('保存失败' + err))

// 删除
// Course.deleteMany().then(result => console.log(result))

// 修改
// Course.updateMany({}, {age: 300}).then(result => console.log(result))

// 查询
// Course.find().then(result => console.log(result)).catch(err => console.log('err'))






// 单条数据操作


// 查询
// Course.findOne({ name: '李四' }).then(result => console.log(result))
// 删除
// Course.findOneAndDelete({ _id: '5c09f267aeb04b22f8460968' }).then(result => console.log(result))
// 修改
// Course.updateOne({name: '李四'}, {age: 120, name: '李狗蛋'}).then(result => console.log(result))
