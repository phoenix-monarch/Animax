const mainsite = "https://unime.vercel.app"
// const mainsite = "http://localhost:3000"
const url = "http://localhost:3000/api"
// const url = "https://mirai-backend.onrender.com/api"
// const consumetApi = "https://api.consumet.org/meta/anilist"
const consumetApi = "https://cors.consumet.stream/https://api.consumet.org"
const consumetCors = "https://cors.consumet.stream"
const ioCors = "https://corsproxy.io/?"

const genres = [
	{ slug: "hanh-dong", name: "Hành Động" },
	{ slug: "vien-tuong", name: "Viễn Tưởng" },
	{ slug: "lang-man", name: "Lãng Mạn" },
	{ slug: "kinh-di", name: "Kinh Dị" },
	{ slug: "vo-thuat", name: "Võ Thuật" },
	{ slug: "hai-huoc", name: "Hài Hước" },
	{ slug: "truong-hoc", name: "Trường Học" },
	{ slug: "trinh-tham", name: "Trinh Thám" },
	{ slug: "am-nhac", name: "Âm Nhạc" },
	{ slug: "chuyen-sinh", name: "Chuyển Sinh" },
	{ slug: "phieu-luu", name: "Phiêu Lưu" },
	{ slug: "sieu-nhien", name: "Siêu Nhiên" },
	{ slug: "doi-thuong", name: "Đời Thường" },
	{ slug: "gia-tuong", name: "Giả Tưởng" },
	{ slug: "robot", name: "Robot" },
	{ slug: "game", name: "Game" },
	{ slug: "the-thao", name: "Thể Thao" },
	{ slug: "kich-tinh", name: "Kịch Tính" },
	{ slug: "phap-thuat", name: "Pháp Thuật" },
]

const provider = [
	"zoro",
	"gogoanime",
	"enime",
	"nineanime",
	"animepahe",
	"animefox",
]

// const engGenres = [
// 	{ slug: "action", name: "Action" },
// 	{ slug: "adventure", name: "Adventure" },
// 	{ slug: "cars", name: "Cars " },
// 	{ slug: "comedy", name: "Comedy" },
// 	{ slug: "crime", name: "Crime" },
// 	{ slug: "dementia", name: "Dementia" },
// 	{ slug: "demons", name: "Demons" },
// 	{ slug: "drama", name: "Drama" },
// 	{ slug: "dub", name: "Dub" },
// 	{ slug: "ecchi", name: "Ecchi" },
// 	{ slug: "family", name: "Family" },
// 	{ slug: "fantasy", name: "Fantasy" },
// 	{ slug: "game", name: "Game" },
// 	{ slug: "gourmet", name: "Gourmet" },
// 	{ slug: "harem", name: "Harem" },
// 	{ slug: "historical", name: "Historical" },
// 	{ slug: "horror", name: "Horror" },
// 	{ slug: "josei", name: "Josei" },
// 	{ slug: "kids", name: "Kids" },
// 	{ slug: "magic", name: "Magic" },
// 	{ slug: "martial-arts", name: "Martial Arts" },
// 	{ slug: "mecha", name: "Mecha" },
// 	{ slug: "military", name: "Military" },
// 	{ slug: "mystery", name: "Mystery" },
// 	{ slug: "parody", name: "Parody" },
// 	{ slug: "police", name: "Police" },
// 	{ slug: "psychological", name: "Psychological" },
// 	{ slug: "romance", name: "Romance" },
// 	{ slug: "samurai", name: "Samurai" },
// 	{ slug: "school", name: "School" },
// 	{ slug: "sci-fi", name: "Sci-fi" },
// 	{ slug: "seinen", name: "Seinen" },
// 	{ slug: "shoujo", name: "Shoujo" },
// 	{ slug: "shoujo-ai", name: "Shoujo-ai" },
// 	{ slug: "shounen", name: "Shounen" },
// 	{ slug: "shounen-ai", name: "Shounen-ai" },
// 	{ slug: "space", name: "Space" },
// 	{ slug: "sports", name: "Sports" },
// 	{ slug: "super-power", name: "Super Power" },
// 	{ slug: "supernatural", name: "Supernatural" },
// 	{ slug: "suspense", name: "Suspense" },
// 	{ slug: "thriller", name: "Thriller" },
// 	{ slug: "vampire", name: "Vampire" },
// 	{ slug: "yaoi", name: "Yaoi" },
// 	{ slug: "yuri", name: "Yuri" },
// ]

const engGenres = [
	{ slug: "action", name: "Action" },
	{ slug: "adventure", name: "Adventure" },
	{ slug: "comedy", name: "Comedy" },
	{ slug: "drama", name: "Drama" },
	{ slug: "ecchi", name: "Ecchi" },
	{ slug: "fantasy", name: "Fantasy" },
	{ slug: "horror", name: "Horror" },
	{ slug: "mahou-shoujo", name: "Mahou Shoujo" },
	{ slug: "mecha", name: "Mecha" },
	{ slug: "music", name: "Music" },
	{ slug: "mystery", name: "Mystery" },
	{ slug: "psychological", name: "Psychological" },
	{ slug: "romance", name: "Romance" },
	{ slug: "sci-fi", name: "Sci-Fi" },
	{ slug: "slice-of-life", name: "Slice of Life" },
	{ slug: "sports", name: "Sports" },
	{ slug: "supernatural", name: "Supernatural" },
	{ slug: "thriller", name: "Thriller" },
]

// const filmGenres = [
// 	{ slug: "action", name: "Action" },
// 	{ slug: "animation", name: "Animation" },
// 	{ slug: "crime", name: "Crime" },
// 	{ slug: "family", name: "Family" },
// 	{ slug: "horror", name: "Horror" },
// 	{ slug: "mystery", name: "Mystery" },
// 	{ slug: "romance", name: "Romance" },
// 	{ slug: "soap", name: "Soap" },
// 	{ slug: "tv-movie", name: "TV Movie" },
// 	{ slug: "western", name: "Western" },
// 	{ slug: "action-adventure", name: "Action & Adventure" },
// 	{ slug: "biography", name: "Biography" },
// 	{ slug: "documentary", name: "Documentary" },
// 	{ slug: "fantasy", name: "Fantasy" },
// 	{ slug: "kids", name: "Kids" },
// 	{ slug: "news", name: "News" },
// 	{ slug: "sci-fi-fantasy", name: "Sci-Fi & Fantasy" },
// 	{ slug: "talk", name: "Talk" },
// 	{ slug: "war", name: "War" },
// ]

const collections = [
	{ slug: "anime-mua-thu-2015", name: "Anime Mùa Thu 2015" },
	{ slug: "hom-nay-xem-gi", name: "Hôm nay xem gì" },
	{ slug: "anime-mua-dong-2016", name: "Anime Mùa Đông 2016" },
	{ slug: "anime-mua-xuan-2016", name: "Anime Mùa Xuân 2016" },
	{ slug: "anime-mua-he-2016", name: "Anime Mùa Hè 2016" },
	{
		slug: "tuyen-tap-anime-cua-studio-ghibli",
		name: "Anime Studio Ghibli",
	},
	{ slug: "anime-the-thao", name: "Anime Thể Thao" },
	{ slug: "anime-game", name: "Anime Game" },
	{ slug: "anime-dai-tap", name: "Anime Dài Tập" },
	{ slug: "anime-tam-ly", name: "Anime Tâm Lý" },
	{
		slug: "anime-lang-man-hay-nhat",
		name: "Siêu phẩm Anime Lãng Mạn",
	},
	{
		slug: "nhung-sieu-pham-anime-hanh-dong",
		name: "Siêu phẩm Anime Hành Động",
	},
	{ slug: "anime-mua-thu-2016", name: "Anime Mùa Thu 2016" },
	{ slug: "anime-mua-dong-2017", name: "Anime Mùa Đông 2017" },
	{ slug: "dien-cung-madhouse", name: "Anime Studio Madhouse" },
	{ slug: "anime-mua-xuan-2017", name: "Anime Mùa Xuân 2017" },
	{ slug: "anime-hai-huoc-nhat", name: "Anime Hài Hước nhất" },
	{
		slug: "anime-phieu-luu-hay-nhat",
		name: "Anime Phiêu Lưu li kỳ",
	},
	{
		slug: "anime-sinh-ton-kich-tinh-nhat",
		name: "Anime Sinh Tồn kịch tính",
	},
	{
		slug: "anime-kinh-dinh-dang-so-nhat",
		name: "Anime Kinh Dị đáng sợ",
	},
	{ slug: "anime-mua-thu-2017", name: "Anime Mùa Thu 2017" },
	{ slug: "anime-mua-he-2017", name: "Anime Mùa Hè 2017" },
	{ slug: "anime-mua-dong-2018", name: "Anime Mùa Đông 2018" },
	{ slug: "anime-mua-xuan-2018", name: "Anime Mùa Xuân 2018" },
	{ slug: "anime-mua-he-2018", name: "Anime Mùa Hè 2018" },
	{ slug: "anime-mua-thu-2018", name: "Anime Mùa Thu 2018" },
	{ slug: "anime-mua-dong-2019", name: "Anime Mùa Đông 2019" },
	{ slug: "anime-mua-xuan-2019", name: "Anime Mùa Xuân 2019" },
	{ slug: "anime-mua-he-2019", name: "Anime Mùa Hè 2019" },
	{ slug: "anime-mua-thu-2019", name: "Anime Mùa Thu 2019" },
	{ slug: "anime-mua-dong-2020", name: "Anime Mùa Đông 2020" },
	{ slug: "anime-mua-xuan-2020", name: "Anime Mùa Xuân 2020" },
	{ slug: "anime-mua-he-2020", name: "Anime Mùa Hè 2020" },
	{ slug: "anime-mua-thu-2020", name: "Anime Mùa Thu 2020" },
	{ slug: "anime-mua-dong-2021", name: "Anime Mùa Đông 2021" },
	{ slug: "anime-mua-xuan-2021", name: "Anime Mùa Xuân 2021" },
	{ slug: "anime-mua-he-2021", name: "Anime Mùa Hè 2021" },
	{ slug: "anime-mua-thu-2021", name: "Anime Mùa Thu 2021" },
	{ slug: "anime-mua-dong-2022", name: "Anime Mùa Đông 2022" },
	{ slug: "anime-mua-xuan-2022", name: "Anime Mùa Xuân 2022" },
	{ slug: "anime-mua-he-2022", name: "Anime Mùa Hè 2022" },
	{ slug: "anime-mua-thu-2022", name: "Anime Mùa Thu 2022" },
	{ slug: "anime-mua-dong-2023", name: "Anime Mùa Đông 2023" },
]

const colorSet = [
	"#a50042",
	"#5849e8",
	"#f98a59",
	"#1b92c0",
	"#f4b89a",
	"#b6bb47",
	"#73fa16",
	"#b2243d",
	"#976155",
	"#bda34c",
]

export const MAINSITE = mainsite
export const API = url
export const GENRES = genres
export const ENG_GENRES = engGenres
export const COLLECTIONS = collections
export const CONSUMET_API = consumetApi
export const CONSUMET_CORS = consumetCors
export const PROVIDER = provider
export const COLORSET = colorSet
export const IO_CORS = ioCors
