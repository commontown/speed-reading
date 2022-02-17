import { config } from 'config'
import { put } from 'redux-saga/effects'

const modelname = 'article';
const model = {
	name: modelname,
	state: {
		articleInfo: {
			title: "The U.K",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit eveniet voluptatum soluta earum quos dolor, illum odit accusamus iusto consequatur? Quae veritatis, laboriosam consectetur mollitia explicabo exercitationem quibusdam animi labore dignissimos id incidunt sapiente! Id, fugiat ullam. In, enim repellendus dolorum, quasi facere nam pariatur asperiores iusto rem quos laborum nostrum, quisquam exercitationem ipsa sunt ex obcaecati amet ab voluptas cum incidunt? Omnis mollitia incidunt nemo eveniet facere ipsa provident tenetur, fuga tempora neque unde consequatur modi fugit in id impedit eos. Molestias doloremque alias nam sint ducimus. Enim cumque aperiam alias, molestiae at quasi. Repellendus reprehenderit laudantium consequatur impedit culpa omnis autem nulla aliquam cumque ullam, harum facere provident, possimus totam et at unde. Maiores aut similique harum perspiciatis pariatur labore saepe magni commodi ad quos quae, dolor ea rem vero veritatis minima facere. Id cumque, assumenda corrupti exercitationem cum mollitia quaerat labore doloribus, excepturi sit vitae molestiae officiis repellat harum, accusamus hic. Cumque animi dolorem neque ducimus ex, soluta dignissimos laborum quia nisi minus architecto dicta commodi incidunt tempore nihil atque itaque recusandae veniam eaque repudiandae, quam dolore praesentium excepturi voluptates? Cupiditate dolorum quae quis adipisci consequuntur eius veniam, eum fuga magni animi ex accusamus eligendi et minus quia earum. Eveniet doloremque itaque nisi enim alias temporibus in neque commodi omnis odio sed beatae nemo labore earum laborum, ipsa, ex repudiandae culpa ut. Ea quos quam voluptatum aliquid illum nihil quod debitis totam, sint dolores dignissimos sapiente blanditiis error pariatur reprehenderit aut, quas laudantium architecto hic omnis. Corrupti dolorum explicabo commodi iste, iusto nulla quam blanditiis, quidem voluptate vero ullam, mollitia doloremque! Dignissimos voluptatum officia molestiae officiis ex, modi numquam beatae facilis maiores esse impedit ipsa libero aliquid enim fuga. Voluptatem ut cum iure optio nihil id natus sequi nesciunt tenetur pariatur hic asperiores repudiandae, laboriosam exercitationem consequuntur facilis! Doloribus laborum asperiores vero provident iure. Laborum saepe, ullam deleniti molestiae unde ad numquam quaerat consequuntur laboriosam itaque repellendus, quia impedit quod mollitia reiciendis amet recusandae delectus soluta eum quos in minima? Voluptatum vero dolore, magni consequuntur perferendis omnis dolor adipisci laborum. Consectetur deserunt velit esse odit rem neque nemo temporibus ut pariatur quaerat incidunt minima autem tenetur praesentium, atque harum voluptates voluptatem distinctio provident quasi sequi eius repellat, minus vel. Enim porro libero quod corrupti non perferendis ad ipsum harum, dicta inventore culpa ea animi odio fuga facilis aspernatur vel repudiandae quidem perspiciatis nobis. Facere amet, libero totam maiores veritatis magni aliquam, maxime, odit non ipsa sapiente blanditiis hic modi ut recusandae ipsum saepe in aliquid dolore! Consectetur at autem veritatis quibusdam quia exercitationem. Ipsam, nihil? Enim distinctio pariatur, repudiandae voluptatem, explicabo ad quas harum ducimus molestias recusandae nostrum repellat fugiat neque cupiditate veniam officia sunt quo eaque dolor maiores! Provident odit quae, error dolor magni hic eveniet sequi minima eligendi, dolorem suscipit maxime placeat praesentium consectetur est perferendis nesciunt neque molestias officia similique. Autem provident blanditiis pariatur qui placeat delectus. Fuga quis praesentium voluptate quaerat vel nihil fugit saepe, sed aperiam laboriosam officiis reprehenderit provident nesciunt adipisci inventore voluptatum dignissimos modi accusantium, a harum suscipit, rerum doloremque explicabo. Odio dicta ad minus laudantium animi delectus id, veniam eius, aliquam sunt earum provident nemo eos officia rem praesentium quis. Ipsa amet esse vel ex molestias, itaque eligendi ab magnam nesciunt consequatur rem non ut aperiam iste. Sequi doloribus blanditiis voluptatum quam impedit minima dolor nostrum sapiente quod. Hic sunt tempore similique inventore numquam reiciendis suscipit nihil nisi expedita cumque reprehenderit eveniet, adipisci error odio perspiciatis sint, porro quisquam fugiat asperiores at culpa? Consequatur sapiente id, dolores voluptas qui soluta laudantium quibusdam provident voluptate veritatis similique nulla veniam odio natus recusandae nam amet quod doloremque aspernatur ducimus est in? Nemo hic iusto consectetur cumque praesentium. Facere eius repellendus consequuntur pariatur voluptates totam veritatis quibusdam fugiat! Voluptatibus totam animi illum aspernatur facere voluptas, sapiente nam, fugit neque perspiciatis minima necessitatibus corporis quidem quasi. Magni sapiente assumenda laboriosam neque vel et ea delectus vitae, fugiat incidunt enim consequatur. Iste unde facilis accusantium, vitae dicta aliquid repellendus ducimus nihil earum autem nemo asperiores alias officia, iure quaerat. Nemo accusantium nihil optio mollitia vitae itaque aspernatur, tenetur voluptatibus aut eum illo vel quisquam quam, maiores molestiae animi error architecto dolorum omnis provident reiciendis eius? Nisi praesentium consectetur iure labore? Incidunt eaque suscipit officiis rem natus modi nobis totam, adipisci minima, amet at reiciendis illo tempora neque ipsum aspernatur voluptas accusantium in porro repellendus architecto sapiente! Optio, autem earum inventore labore quibusdam delectus quos dicta aliquam nihil sequi corrupti quod eaque assumenda quas rerum ex deleniti unde enim sed. Sunt quidem esse tenetur praesentium excepturi cupiditate sequi, quo libero ratione fuga dolorem cumque quas sed nihil labore, tempora tempore inventore velit ducimus qui fugiat porro possimus. Quos a similique incidunt debitis error sapiente, accusamus doloremque fugiat quidem libero quisquam possimus tempora suscipit accusantium sequi ducimus aspernatur eum atque id sed? Itaque ab voluptate ea quos, corporis autem sapiente illum, cum voluptatibus unde vero libero deleniti consequatur nisi ipsam et eligendi sequi quibusdam delectus. Aut corporis aperiam maiores modi aliquam beatae incidunt autem commodi sit. Magnam officia officiis soluta aliquam saepe expedita quaerat minus esse vel qui iusto voluptate nulla autem a eaque, ipsa eius ab sunt inventore maiores nemo architecto velit porro necessitatibus. Excepturi quasi deleniti architecto fuga error earum asperiores sapiente minus, officia inventore veniam eligendi accusamus soluta, voluptates fugit accusantium illum quia enim voluptas molestias autem hic adipisci. Laborum nesciunt facilis accusantium dolore non ducimus perferendis. Vel, harum ipsa. Expedita quibusdam odit suscipit nemo, error minus unde cum voluptatem similique. Voluptatum, voluptas? Vel aut expedita vero harum nisi sint beatae dolor unde perferendis maxime nam dolore consequatur obcaecati eveniet eligendi rerum, exercitationem voluptatem asperiores voluptates illo? Hic soluta non, molestias aliquam beatae error temporibus unde dolores eos quisquam obcaecati cum placeat consequatur, vitae aliquid! Suscipit, nesciunt aspernatur consequuntur laboriosam, quibusdam vitae eligendi delectus, ea quia rem nihil consequatur dignissimos sequi quo perspiciatis? Vitae aliquam aspernatur deleniti quisquam alias sunt. Soluta repudiandae neque atque ratione laudantium tenetur repellendus quidem inventore molestias recusandae.",
			questionList: [
				{
					question: "question1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo asperiores hic mollitia consectetur iste possimus natus illum provident magnam porro omnis cum tenetur quae, ipsa beatae nemo, distinctio est eligendi ab. Voluptatum odit illo fugit ea vel! Ducimus, odit pariatur laudantium nemo distinctio obcaecati dolores, iure laborum, commodi earum blanditiis.",
					options: [
						{
							title: "question1 Option 1",
							status: false
						},
						{
							title: "question1 Option 2",
							status: false
						},
						{
							title: "question1 Option 3",
							status: false
						},
						{
							title: "question1 Option 4",
							status: false
						}
					]
				},
				{
					question: "question2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo asperiores hic mollitia consectetur iste possimus natus illum provident magnam porro omnis cum tenetur quae, ipsa beatae nemo, distinctio est eligendi ab. Voluptatum odit illo fugit ea vel! Ducimus, odit pariatur laudantium nemo distinctio obcaecati dolores, iure laborum, commodi earum blanditiis.",
					options: [
						{
							title: "question2 Option 1",
							status: false
						},
						{
							title: "question2 Option 2",
							status: false
						},
						{
							title: "question2 Option 3",
							status: false
						},
						{
							title: "question2 Option 4",
							status: false
						}
					]
				},
				{
					question: "question3: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo asperiores hic mollitia consectetur iste possimus natus illum provident magnam porro omnis cum tenetur quae, ipsa beatae nemo, distinctio est eligendi ab. Voluptatum odit illo fugit ea vel! Ducimus, odit pariatur laudantium nemo distinctio obcaecati dolores, iure laborum, commodi earum blanditiis.",
					options: [
						{
							title: "question3 Option 1",
							status: false
						},
						{
							title: "question3 Option 2",
							status: false
						},
						{
							title: "question3 Option 3",
							status: false
						},
						{
							title: "question3 Option 4",
							status: false
						}
					]
				}
			]
		},
		speedread: {
			"passage": {
				"_id": 1,
				"title": "Ben",
				"level": 3,
				"psg_content": "Ben lives on a farm in England.  There are many farms in the U.K.  Some grow food.  Some keep animals.  Ben’s farm does both. <br/>He helps his dad.  His dad drives a tractor.  It is blue and very big.  Ben helps his mum.  She rides a horse.  It is brown and very friendly. <br/>On the farm there are some sheep.  They are white.  They live on the hills.  Ben's dog, Dodger, watches the sheep.  There are cows too.  The cows are black and white.  They make milk.  They live by the river.  Near the house there are some chickens.  They make eggs.  They make a noise too! <br/>Ben and his family grow some fruit and vegetables too.  In the summer they grow tomatoes and peas.  In the autumn they grow apples.  In the winter, they grow potatoes.   <br/>Ben loves his farm!",
				"word_count": "137",
				quiz_content: [
					{
						body: 'Where is Ben’s farm?',
						choices: [
							{
								title: 'England',
								status: false
							},
							{
								title: 'France',
								status: false
							},
							{
								title: 'America',
								status: false
							},
							{
								title: 'India ',
								status: false
							}
						]
					},
					{
						body: 'What does Ben’s dad drive?',
						choices: [
							{
								title: 'car',
								status: false
							},
							{
								title: 'bus',
								status: false
							},
							{
								title: 'train',
								status: false
							},
							{
								title: 'tractor',
								status: false
							}
						]
					},
					{
						body: 'What colour is Ben’s mum’s horse?',
						choices: [
							{
								title: 'white',
								status: false
							},
							{
								title: 'grey',
								status: false
							},
							{
								title: 'brown',
								status: false
							},
							{
								title: 'black',
								status: false
							}
						]
					},
					{
						body: 'Where do the cows live?',
						choices: [
							{
								title: 'on the hills',
								status: false
							},
							{
								title: 'near the river',
								status: false
							},
							{
								title: 'by the house',
								status: false
							},
							{
								title: 'somewhere else',
								status: false
							}
						]
					},
					{
						body: 'When does the farm grow apples?',
						choices: [
							{
								title: 'spring',
								status: false
							},
							{
								title: 'summer',
								status: false
							},
							{
								title: 'autumn',
								status: false
							},
							{
								title: 'winter',
								status: false
							}
						]
					}
				],
				"answers": "A,D,C,B,C",
				"psg_time_given": null,
				"quiz_time_given": null,
				"image_url": null,
				"_ctime": "2021-10-05 17:58:12"
			},
			"last_level": 3
		}
	},

	effects: {
		*fetch() {
			const data = yield fetch(`${config.api.someone.index}/getPassage`, {
				method: "GET",
				credentials: "include"
			})
				.then(res => res.json())

			// 这里是对后端返回的数据进行处理choices字段增加staus
			let newdata = data.speedread

			newdata.passage.quiz_content = JSON.parse(newdata.passage.quiz_content)
			newdata.passage.quiz_content.forEach((item) => {
				let choices = [...item.choices]
				item.choices = choices.map((subitem) => {
					return {
						title: subitem,
						status: false
					}
				})
			})
			newdata = JSON.parse(JSON.stringify(newdata).replace(/’/g, "'"))
			// console.log(JSON.parse(newdata.passage.quiz_content))
			const speedread = newdata
			console.log('speedread:', speedread);
			yield put({ type: `${modelname}/store`, speedread })
		}
	},

	reducers: {
		onLoad(state, { data: { dispatch, history } }) {
			// ... do these when the model is loaded
			console.log('article onLoad:', dispatch, history,);
		},
		setArticle(state, action) {
			let { articleInfo } = state;
			const { article } = action.data;
			articleInfo = article;
			return { ...state, articleInfo }
		},
		store(state, action) {
			const { speedread } = action;
			return { ...state, speedread }
		},
	},
}

export default model
