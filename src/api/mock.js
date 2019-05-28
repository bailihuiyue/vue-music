export const isOnLine = window.localStorage.getItem('VueMusicUseOnlineData')
export const mockData = (data) => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}
export const getRecommendMock = {
  'code': 0,
  'data': {
    'slider': [{
      'linkUrl': 'http://y.qq.com/w/album.html?albummid=001XxoUG16aa3I',
      'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1322049.jpg',
      'id': 21302
    }, {
      'linkUrl': 'http://y.qq.com/m/act/sfhd/260.html?ADTAG=banner&openinqqmusic=1',
      'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1321576.jpg',
      'id': 21298
    }, {
      'linkUrl': 'http://y.qq.com/w/album.html?albummid=00219N4J2qw1zU',
      'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1321446.jpg',
      'id': 21310
    }, {
      'linkUrl': 'https://y.qq.com/msa/362/232_7550.html?openinqqmusic=1',
      'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1322211.jpg',
      'id': 21276
    }, {
      'linkUrl': 'https://y.qq.com/portal/headline/detail.html?zid=1261224',
      'picUrl': 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1321786.jpg',
      'id': 21296
    }],
    'radioList': [{
      'picUrl': 'http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg',
      'Ftitle': '热歌',
      'radioid': 199
    }, {
      'picUrl': 'http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg',
      'Ftitle': '一人一首招牌歌',
      'radioid': 307
    }],
    'songList': []
  }
}
export const getDiscListMock = {
  'result': 'SUCCESS',
  'code': 200,
  'data': [{
    'id': '6998375386',
    'name': '初夏｜宁静之间流动的缱绻时光',
    'creator': '离歌',
    'createTime': '2019-05-25',
    'pic': 'http://p.qpic.cn/music_cover/Xewa2JUmZ1rQd7ZeuBIZX7tWwy41kStKbwRawhYBbSuVibj5ReccgPw/600?n=1',
    'playCount': '12658'
  }, {
    'id': '6991394717',
    'name': '不断在脑中盘旋的慵懒 Art Pop',
    'creator': '欧美流行女皇',
    'createTime': '2019-05-24',
    'pic': 'http://p.qpic.cn/music_cover/uZvZiblZBVX81byoibEPP4iaDAjpjoicm4rR3lWt6wrLvsKNOSQXdEoSNA/600?n=1',
    'playCount': '33810'
  }, {
    'id': '7001050219',
    'name': '恋情告急：不爱我就拉倒',
    'creator': '我是小达人',
    'createTime': '2019-05-24',
    'pic': 'http://p.qpic.cn/music_cover/1A4uAkiamsicACoTtN0PhOGCB82P6hXEOrRMN0JlGaMpHI3KXnn4pehg/600?n=1',
    'playCount': '55098'
  }, {
    'id': '6638378047',
    'name': '盘点 | 2019你不可错过的年度欧美热单',
    'creator': '音乐时光机',
    'createTime': '2019-05-22',
    'pic': 'http://p.qpic.cn/music_cover/j50Ihtp2h2UwaRgJuNjmRicEp2VeDicEibfy1N2wAdSUngiafMV0wfea3w/600?n=1',
    'playCount': '18122'
  }, {
    'id': '6992222711',
    'name': '一个人看演唱会是几级孤独... ',
    'creator': '华语流行之王',
    'createTime': '2019-05-20',
    'pic': 'http://p.qpic.cn/music_cover/ZfWLEKXs0aUDM9Rl8E4k7O7Rd9XrGLag0OMg9Q3iamibiaicONs8iaczJsA/600?n=1',
    'playCount': '327497'
  }, {
    'id': '6999185881',
    'name': '耳朵探测器 ・ 华语小众男声',
    'creator': '允许部分冷门先热起来',
    'createTime': '2019-05-22',
    'pic': 'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOAQia04Gic1q0aO7SEgicofxap1fNXULiaib1LGw/600?n=1',
    'playCount': '148841'
  }, {
    'id': '6999665053',
    'name': '那些软软糯糯的华语女声',
    'creator': '华语流行之王',
    'createTime': '2019-05-22',
    'pic': 'http://p.qpic.cn/music_cover/ZfWLEKXs0aUDM9Rl8E4k7O7Rd9XrGLagKgBLX18vnic2SuFcuwn4jYQ/600?n=1',
    'playCount': '24332'
  }, {
    'id': '6987356383',
    'name': '青春回忆杀 | 影视剧里的花样年华 ',
    'creator': '完美青春OST',
    'createTime': '2019-05-16',
    'pic': 'http://p.qpic.cn/music_cover/vZgrCO5sCcCMNjQq7RcFicYoY0I2dQ5iaDoWzs5hdUrSkpmq77uALdIA/600?n=1',
    'playCount': '347040'
  }, {
    'id': '6985221262',
    'name': '书房BGM:藏在耳蜗里的俏皮音律',
    'creator': '抱影子的鬼',
    'createTime': '2019-05-15',
    'pic': 'http://p.qpic.cn/music_cover/HjyDXBR7FLpiaxKq0mliakxbcI0qdHhxA36IiaPQAhWsJBzTe8RVMwY4Q/600?n=1',
    'playCount': '208892'
  }, {
    'id': '6987532596',
    'name': '优质男女歌手同曲翻唱集',
    'creator': '故里',
    'createTime': '2019-05-17',
    'pic': 'http://p.qpic.cn/music_cover/JGWy4hDbeHGB4lAPwcanXIW0FIO3EuDWPoPVokDHYaKoh0sXvRXJZw/600?n=1',
    'playCount': '386605'
  }, {
    'id': '6911068188',
    'name': '酸甜往事 : 少女的懵懂独白',
    'creator': 'ca.sa.do.^^',
    'createTime': '2019-05-13',
    'pic': 'http://p.qpic.cn/music_cover/O7jWchh5tkOicJBz1xFCAv8gQD6MqbI0Zf1y8NUdfz0cYhuPFNwqhCA/600?n=1',
    'playCount': '49185'
  }, {
    'id': '6988017429',
    'name': '超治愈的英韩混合韩语歌',
    'creator': '木焓',
    'createTime': '2019-05-24',
    'pic': 'http://p.qpic.cn/music_cover/Gh1XgWazibYlbuPicu2mQqzDP8uEIBGSGXDgy9SiaHGAV48sXNlYSjhLg/600?n=1',
    'playCount': '10876'
  }, {
    'id': '5474239760',
    'name': '如果思念有声音',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-11-06',
    'pic': 'http://p.qpic.cn/music_cover/PiajxSqBRaELYK0rxqGCU2a5D5xuBE0WQRchQG5nkxs7ib8FBWe1hQAA/600?n=1',
    'playCount': '217364163'
  }, {
    'id': '6943772430',
    'name': '自我剖析！十二星座诊疗所',
    'creator': '木焓',
    'createTime': '2019-05-10',
    'pic': 'http://p.qpic.cn/music_cover/Gh1XgWazibYlbuPicu2mQqzOhWoMNnaGTnibTBBOq0zs9H54IJXn2y8nQ/600?n=1',
    'playCount': '25907'
  }, {
    'id': '3839750080',
    'name': '编辑推荐：粤语代表作',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-04-20',
    'pic': 'http://p.qpic.cn/music_cover/1kicVrMEg0Fn1TyQ2yOZs3ZTp9gyvcRfy9QkvwLicuJIa2E5jGCyibiazA/600?n=1',
    'playCount': '17089547'
  }, {
    'id': '6801821793',
    'name': 'STU48组合歌曲精选集',
    'creator': '           私に闻いて风i',
    'createTime': '2019-05-05',
    'pic': 'http://p.qpic.cn/music_cover/0HKQa8IxUt8Bh1LsmCsLBdWeNA7a0meIvZIzsZfk3BH229S69hlPFQ/600?n=1',
    'playCount': '32520'
  }, {
    'id': '6944634962',
    'name': '00后童年记忆 : 怀念旧时动画',
    'creator': '音_炎,Xia',
    'createTime': '2019-04-30',
    'pic': 'http://p.qpic.cn/music_cover/K6CEv0Hv9DcRopdMZUDephk4ZKxVQ8KNOur3WktGKuhVfx65A9JO3g/600?n=1',
    'playCount': '14512'
  }, {
    'id': '6946758648',
    'name': 'DUA LIPA’s Favourites',
    'creator': 'Dua Lipa',
    'createTime': '2019-04-26',
    'pic': 'http://p.qpic.cn/music_cover/U9a3NTBnS1lZpRzYJr1ibWKzaRAPQsWibtFV0tBUrYa1WicT0qWZSIQ8w/600?n=1',
    'playCount': '223423'
  }, {
    'id': '6814337212',
    'name': 'AKB Group SOLO、限定小分队合集',
    'creator': '霓虹株式分社',
    'createTime': '2019-04-24',
    'pic': 'http://p.qpic.cn/music_cover/jZTbkx7z8efhhicLJfvs68RqnNvFJlcZF7JVqvMsLbKwa7htBSbd2pA/600?n=1',
    'playCount': '24427'
  }, {
    'id': '6946803015',
    'name': '任贤齐 滚石精选集',
    'creator': '今晚煲个机',
    'createTime': '2019-04-23',
    'pic': 'http://p.qpic.cn/music_cover/7OfIwewiaEIics9V9qzjfibgHv1pibIMIvIrBVhTppBqyDAwoWAud7gdWw/600?n=1',
    'playCount': '513139'
  }, {
    'id': '6947715640',
    'name': '张震岳 滚石精选集',
    'creator': '塞纳河边拉二胡',
    'createTime': '2019-04-23',
    'pic': 'http://p.qpic.cn/music_cover/7yOibJqtvBfzibT4O5iblPmbxVHFHVFoVMoCuJWUuYCFXYnxhLXTmvTzg/600?n=1',
    'playCount': '58357'
  }, {
    'id': '6946783168',
    'name': '五月天 滚石精选集',
    'creator': '进度条加载中',
    'createTime': '2019-04-22',
    'pic': 'http://p.qpic.cn/music_cover/JfBpQRys8dD1uwj2NFlcpibo3wZfU7HGUuTxMsdABOXQeibonrzJmITQ/600?n=1',
    'playCount': '220881'
  }, {
    'id': '6946789100',
    'name': '莫文蔚 滚石精选集',
    'creator': '万年蹦野迪',
    'createTime': '2019-04-22',
    'pic': 'http://p.qpic.cn/music_cover/qDbLP34I85btcj5PQ4664UsTErysmLEkNKXKvlN40jhczpibbhdiagYQ/600?n=1',
    'playCount': '247472'
  }, {
    'id': '6947930865',
    'name': '刘若英 滚石精选集',
    'creator': '今晚煲个机',
    'createTime': '2019-04-23',
    'pic': 'http://p.qpic.cn/music_cover/7OfIwewiaEIics9V9qzjfibgHv1pibIMIvIriayveKDsTcLVvoyiaYYLgCeg/600?n=1',
    'playCount': '305707'
  }, {
    'id': '6946783200',
    'name': '梁静茹 滚石精选集',
    'creator': '进度条加载中',
    'createTime': '2019-04-22',
    'pic': 'http://p.qpic.cn/music_cover/JfBpQRys8dD1uwj2NFlcpibo3wZfU7HGUsrNn0kMl8ZLpoLR5P2tFDg/600?n=1',
    'playCount': '260800'
  }, {
    'id': '6940841576',
    'name': '林忆莲 滚石精选集',
    'creator': '万年蹦野迪',
    'createTime': '2019-04-22',
    'pic': 'http://p.qpic.cn/music_cover/qDbLP34I85btcj5PQ4664UsTErysmLEk6mucFibKV3yW2KCPJzHmYUg/600?n=1',
    'playCount': '488605'
  }, {
    'id': '3833853300',
    'name': '编辑推荐：国语热歌',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-04-16',
    'pic': 'http://p.qpic.cn/music_cover/1kicVrMEg0Fn1TyQ2yOZs3ZTp9gyvcRfyJBWOic54YAGhMYD3L1kk9cw/600?n=1',
    'playCount': '45795698'
  }, {
    'id': '6934733546',
    'name': '韩系蜜曲 : 融化在冰淇淋里啦！',
    'creator': '北鹤',
    'createTime': '2019-04-13',
    'pic': 'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnAn7D85Lm81htVywbpnLk3mJnZy4thJAUw/600?n=1',
    'playCount': '240173'
  }, {
    'id': '6946776962',
    'name': '李宗盛 滚石精选集',
    'creator': '万年蹦野迪',
    'createTime': '2019-04-23',
    'pic': 'http://p.qpic.cn/music_cover/qDbLP34I85btcj5PQ4664UsTErysmLEkMCtZpia8FcKDY3EOrZ9PXiag/600?n=1',
    'playCount': '700312'
  }, {
    'id': '6554553363',
    'name': '爱的告白 ：为你，千千万万遍',
    'creator': '蜜糖男孩',
    'createTime': '2019-04-11',
    'pic': 'http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu7DlODZnmY24lyM4pRozNBDODoKtwYXG2g/600?n=1',
    'playCount': '393233'
  }, {
    'id': '6982828958',
    'name': '让心情释放！管它星期几',
    'creator': '木焓',
    'createTime': '2019-05-17',
    'pic': 'http://p.qpic.cn/music_cover/Gh1XgWazibYlbuPicu2mQqzDP8uEIBGSGXajFFqImFaNG7oKNeLUibYeQ/600?n=1',
    'playCount': '17370'
  }, {
    'id': '3833852575',
    'name': '编辑推荐：国语新歌',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-04-16',
    'pic': 'http://p.qpic.cn/music_cover/1kicVrMEg0Fn1TyQ2yOZs3ZTp9gyvcRfyHcq8MX7xyKabrmnnJcr7bg/600?n=1',
    'playCount': '8754000'
  }, {
    'id': '6985738316',
    'name': '甜蜜520 : 彼此牵手一生',
    'creator': '北鹤',
    'createTime': '2019-05-15',
    'pic': 'http://p.qpic.cn/music_cover/3MLTH2k3HibTypyQfrdDcnIbPtFGAb4cHTDvoSqx6opHPo9HMnEj9Yg/600?n=1',
    'playCount': '143893'
  }, {
    'id': '6985789373',
    'name': '华语触电男嗓 ・ 撩动少女心事',
    'creator': '蜜糖男孩',
    'createTime': '2019-05-15',
    'pic': 'http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu2hQxSMLUngN9E9ichj1aqk7jVcD162iar7g/600?n=1',
    'playCount': '34368'
  }, {
    'id': '1681772876',
    'name': '听几首韩语女声，时喜时泣',
    'creator': '苏扬',
    'createTime': '2017-01-14',
    'pic': 'http://p.qpic.cn/music_cover/5SJ4HnG01OpcTUrnibj6h68mcAKEstibOrkRClibhibI7c3iarJqC8rCSDQ/600?n=1',
    'playCount': '3629790'
  }, {
    'id': '1702976910',
    'name': '倾听华语大叔们的深情诉唱',
    'creator': 'ら      旁观者',
    'createTime': '2017-01-18',
    'pic': 'http://p.qpic.cn/music_cover/YoXXeCgeqmkyaNrSIWue6VdzOWP25XnFtH0FiaFcjYswPyjCCJm3K3g/600?n=1',
    'playCount': '5771017'
  }, {
    'id': '6938656900',
    'name': '通勤愉悦小调，唤醒沉睡细胞',
    'creator': '蜜糖男孩',
    'createTime': '2019-04-16',
    'pic': 'http://p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu0oibQl7aic4ica36WQNnz7SRD0yMWbJbXYWQ/600?n=1',
    'playCount': '223350'
  }, {
    'id': '1352618892',
    'name': '每个人都是职业扮演者',
    'creator': '小蝶蝶蝶蝶。',
    'createTime': '2016-12-09',
    'pic': 'http://p.qpic.cn/music_cover/PiajxSqBRaEIun9sgMqdJp8WU9oZ8lTFBUGZJjUMmKCI/600?n=1',
    'playCount': '838213'
  }, {
    'id': '7001048679',
    'name': '最・周杰伦',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2019-05-24',
    'pic': 'http://p.qpic.cn/music_cover/xiabfMZAmQ0PYUzgCvOicArBOcyt7ez6RXedb0y3USAlgraIsCQyuhkg/600?n=1',
    'playCount': '204010'
  }, {
    'id': '2348321594',
    'name': '唱入心底，让你沉迷的粤语治愈系',
    'creator': '念葳蕊',
    'createTime': '2017-01-11',
    'pic': 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbODyiaWeux4uzcLicswKKDoDacdtXo1xee3Q/600?n=1',
    'playCount': '1155671'
  }, {
    'id': '5784955636',
    'name': '流行发电站',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-12-01',
    'pic': 'http://p.qpic.cn/music_cover/ltomernzQVcJmroHNJ99oLFc70Fv6xUWP98fpCClehiaPPY7uD99FQA/600?n=1',
    'playCount': '17185784'
  }, {
    'id': '1149725023',
    'name': '虽然知道结局，但并不后悔经历',
    'creator': '鹿屿森。',
    'createTime': '2017-02-06',
    'pic': 'http://p.qpic.cn/music_cover/GicLvIbUn8xYqj6S6ebaWIaHp7PWCVdicTT3am0a5p7kica1V3MkxCSRQ/600?n=1',
    'playCount': '845392'
  }, {
    'id': '808402606',
    'name': '动感音符 爱不释手',
    'creator': 'RED',
    'createTime': '2016-10-20',
    'pic': 'http://p.qpic.cn/music_cover/D3bYSwax84PKO7qxOWfibqIicgpYtf97KCXvJUBZQOjTl3iazmWPsTLOQ/600?n=1',
    'playCount': '4146712'
  }, {
    'id': '3480543985',
    'name': '忘记一切，走进音乐的时代',
    'creator': '令狐星星',
    'createTime': '2015-09-24',
    'pic': 'http://p.qpic.cn/music_cover/9t1gGdiaGt0rECwFQib7qOA2n2lSmqLm4PH1rqaHKq6GURCSJibiahMyDw/600?n=1',
    'playCount': '3920374'
  }, {
    'id': '4264151108',
    'name': '情绪燃料',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-08-15',
    'pic': 'http://p.qpic.cn/music_cover/vKD04DaXHARU3nesVgW5IZ1icRuavejoG4qoMsmugAjmRpJMmyUl4Zg/600?n=1',
    'playCount': '38484059'
  }, {
    'id': '3478577343',
    'name': '用音乐阐述另一种快乐',
    'creator': '令狐星星',
    'createTime': '2015-09-12',
    'pic': 'http://p.qpic.cn/music_cover/9t1gGdiaGt0rECwFQib7qOAibh1ID3ia4bjibSLdD9bzJD53k6iburia6oH2w/600?n=1',
    'playCount': '4057753'
  }, {
    'id': '3241834720',
    'name': '国语版翻唱日语有着不一样的心境',
    'creator': '默默噬殇',
    'createTime': '2016-12-19',
    'pic': 'http://p.qpic.cn/music_cover/j6u4xyxzBGeXbr40YxV6e0npibwolgfde3iaEhgT73al5yL9CVeON4bQ/600?n=1',
    'playCount': '300489'
  }, {
    'id': '1737243632',
    'name': '香港Indie乐 简单的小事情',
    'creator': '顾安颜',
    'createTime': '2017-02-21',
    'pic': 'http://p.qpic.cn/music_cover/mDeRCTf7ZIfqN2LydmXRWnnroInvumib41g2uhblajokskmmFicyB45g/600?n=1',
    'playCount': '121047'
  }, {
    'id': '4264151267',
    'name': '浴室KTV',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-08-15',
    'pic': 'http://p.qpic.cn/music_cover/MKjEtF7diatibd6B0iaeF5KgvZLicqXkjyr7v8S658aibQYFKEPC9ezxs2g/600?n=1',
    'playCount': '51348478'
  }, {
    'id': '2595398337',
    'name': '工作到脑袋发麻，不想回家',
    'creator': '颜陌',
    'createTime': '2016-10-20',
    'pic': 'http://p.qpic.cn/music_cover/anUUDT6sibJtWzOoDS2UFO03reEds4n5r8thibmmQEHNAJaFAibD1ibZsA/600?n=1',
    'playCount': '2654977'
  }, {
    'id': '4264151345',
    'name': '独立内核',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-08-15',
    'pic': 'http://p.qpic.cn/music_cover/MKjEtF7diatibd6B0iaeF5Kgm3H6XcbaD1LYJdAuChUzXM1g9kZ0a2Lrw/600?n=1',
    'playCount': '14231705'
  }, {
    'id': '2597770095',
    'name': '意料之外的声音，有点动听',
    'creator': '颜陌',
    'createTime': '2016-01-11',
    'pic': 'http://p.qpic.cn/music_cover/anUUDT6sibJtWzOoDS2UFO5lPfa0LaTpWUZib3LdvDHxfvrayL9vHtOw/600?n=1',
    'playCount': '3611351'
  }, {
    'id': '4264151471',
    'name': '孤独症候群',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-08-15',
    'pic': 'http://p.qpic.cn/music_cover/MKjEtF7diatibd6B0iaeF5Kgm3H6XcbaD1Lwpia2ibsH2LPkADehmlJ7cBQ/600?n=1',
    'playCount': '16360779'
  }, {
    'id': '3188573346',
    'name': '激情亢奋只因爱意上头',
    'creator': '一位果农',
    'createTime': '2015-12-01',
    'pic': 'http://p.qpic.cn/music_cover/4h0Uv4XOMvMQewicZ6nE9hFpxL9eYPDp5kZfCIhvdIJvEZX7tWybt8w/600?n=1',
    'playCount': '3228524'
  }, {
    'id': '4264150862',
    'name': '早安城市',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2018-08-15',
    'pic': 'http://p.qpic.cn/music_cover/4pmnRu5sL5QbtO8OS8NKJY6QVGPyVLF2T1uUQfUcmj7ELMXpziawp3A/600?n=1',
    'playCount': '27785156'
  }, {
    'id': '3544306529',
    'name': '欧美：同名不同歌 好听却冷门',
    'creator': '如��似��',
    'createTime': '2016-12-23',
    'pic': 'http://p.qpic.cn/music_cover/FYPHTs0Zz2L15ZajlnibOdDLZzoaGib1WxibtmmRgveiaFxJUEhLZtibsag/600?n=1',
    'playCount': '296724'
  }, {
    'id': '6952757173',
    'name': 'Dua Lipa私藏',
    'creator': 'QQ音乐官方歌单',
    'createTime': '2019-04-27',
    'pic': 'http://p.qpic.cn/music_cover/xiabfMZAmQ0PYUzgCvOicArAhHZFcktvgcNAzcJWTyvkzlDpIftyHhTw/600?n=1',
    'playCount': '430757'
  }, {
    'id': '3699149818',
    'name': '心沉似海，让心思浸没碧蓝海域(男声篇)',
    'creator': 'La solitudine',
    'createTime': '2018-01-29',
    'pic': 'http://p.qpic.cn/music_cover/UFS2rA4kUtJXJ0JwvGZvtyCgzib62hfxSY5jO6LGle9NTib7bj2Uu56g/600?n=1',
    'playCount': '805877'
  }, {
    'id': '3165614499',
    'name': '眼泪的错觉，哭泣的想念',
    'creator': '南栀姑娘',
    'createTime': '2015-06-23',
    'pic': 'http://p.qpic.cn/music_cover/PiajxSqBRaELYQ2w7m6EFNpSr2XdaPYsYiahplJq1ALHg/600?n=1',
    'playCount': '5047488'
  }, {
    'id': '2908585192',
    'name': '华语鼓点，节奏一秒惑心',
    'creator': '丨',
    'createTime': '2017-04-04',
    'pic': 'http://p.qpic.cn/music_cover/dJ5V9qGH631ib1OAp18F9ZouXGxLNE6Q7TKFicJE8X3Zl0ibG1aoLbzRA/600?n=1',
    'playCount': '4232716'
  }]
}
export const getSongListMock = {
  'result': 'SUCCESS',
  'code': 200,
  'data': {
    'id': '6998375386',
    'title': '初夏｜宁静之间流动的缱绻时光',
    'desc': '在躁动不安的初夏时日间<br><br>你有多久没有倾听过心底深处的宁静了呢...<br><br>听一首歌<br><br>感受歌里悄悄流动的缱绻时光<br><br>如同河水缓缓冲荡下缓坡<br><br>好似花香渐渐飘散在空气间<br><br>像是夏风轻轻飘荡在树荫之下<br><br>仿佛虫鸟叽喳......',
    'author': '离歌🕊',
    'songnum': '29',
    'logo': 'http://p.qpic.cn/music_cover/Xewa2JUmZ1rQd7ZeuBIZX7tWwy41kStKbwRawhYBbSuVibj5ReccgPw/300?n=1',
    'songs': [{
      'id': '003setgH2QZLod',
      'name': '门',
      'singer': '魏如萱',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003setgH2QZLod&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003setgH2QZLod&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003setgH2QZLod&key=579621905',
      'time': 201
    }, {
      'id': '002tJE9X0w7OQD',
      'name': '等等',
      'singer': '王菲',
      'url': 'https://api.itooi.cn/music/tencent/url?id=002tJE9X0w7OQD&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=002tJE9X0w7OQD&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002tJE9X0w7OQD&key=579621905',
      'time': 207
    }, {
      'id': '003MHD9p1yF9PG',
      'name': '停格',
      'singer': '蔡健雅',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003MHD9p1yF9PG&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003MHD9p1yF9PG&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003MHD9p1yF9PG&key=579621905',
      'time': 229
    }, {
      'id': '001Ua1we0lbrhn',
      'name': '小尘埃',
      'singer': '陈绮贞',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001Ua1we0lbrhn&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001Ua1we0lbrhn&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001Ua1we0lbrhn&key=579621905',
      'time': 182
    }, {
      'id': '001lGjJ93f6yaZ',
      'name': '寻人启事',
      'singer': '徐佳莹',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001lGjJ93f6yaZ&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001lGjJ93f6yaZ&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001lGjJ93f6yaZ&key=579621905',
      'time': 276
    }, {
      'id': '001Bpt0G10W37h',
      'name': '外面的世界',
      'singer': '莫文蔚',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001Bpt0G10W37h&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001Bpt0G10W37h&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001Bpt0G10W37h&key=579621905',
      'time': 273
    }, {
      'id': '002Soe6F1akG91',
      'name': '到处不存在的我',
      'singer': '王心凌',
      'url': 'https://api.itooi.cn/music/tencent/url?id=002Soe6F1akG91&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=002Soe6F1akG91&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002Soe6F1akG91&key=579621905',
      'time': 261
    }, {
      'id': '003fxtLM2a3usa',
      'name': '全世界谁倾听你',
      'singer': '林宥嘉',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003fxtLM2a3usa&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003fxtLM2a3usa&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003fxtLM2a3usa&key=579621905',
      'time': 259
    }, {
      'id': '000A1LEv1H0u2D',
      'name': '尚好的青春',
      'singer': '孙燕姿',
      'url': 'https://api.itooi.cn/music/tencent/url?id=000A1LEv1H0u2D&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=000A1LEv1H0u2D&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000A1LEv1H0u2D&key=579621905',
      'time': 264
    }, {
      'id': '00455rxO0cR80u',
      'name': '时光机',
      'singer': '五月天',
      'url': 'https://api.itooi.cn/music/tencent/url?id=00455rxO0cR80u&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=00455rxO0cR80u&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=00455rxO0cR80u&key=579621905',
      'time': 220
    }, {
      'id': '004Z04kA28oal5',
      'name': '纤维',
      'singer': '林忆莲',
      'url': 'https://api.itooi.cn/music/tencent/url?id=004Z04kA28oal5&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=004Z04kA28oal5&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004Z04kA28oal5&key=579621905',
      'time': 265
    }, {
      'id': '000WJSA201Ckwg',
      'name': '还好',
      'singer': '梁文音',
      'url': 'https://api.itooi.cn/music/tencent/url?id=000WJSA201Ckwg&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=000WJSA201Ckwg&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000WJSA201Ckwg&key=579621905',
      'time': 254
    }, {
      'id': '000kNj5K0jZzTf',
      'name': '情歌',
      'singer': '潘裕文',
      'url': 'https://api.itooi.cn/music/tencent/url?id=000kNj5K0jZzTf&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=000kNj5K0jZzTf&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000kNj5K0jZzTf&key=579621905',
      'time': 298
    }, {
      'id': '0013ASj23XmGUr',
      'name': '离心力',
      'singer': '杨乃文',
      'url': 'https://api.itooi.cn/music/tencent/url?id=0013ASj23XmGUr&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=0013ASj23XmGUr&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0013ASj23XmGUr&key=579621905',
      'time': 333
    }, {
      'id': '003zmtQB0GjdL7',
      'name': '一种念头',
      'singer': '王若琳',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003zmtQB0GjdL7&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003zmtQB0GjdL7&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003zmtQB0GjdL7&key=579621905',
      'time': 276
    }, {
      'id': '001quTIS0dtjNe',
      'name': '让我好好看看你',
      'singer': '许茹芸',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001quTIS0dtjNe&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001quTIS0dtjNe&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001quTIS0dtjNe&key=579621905',
      'time': 252
    }, {
      'id': '003TUgdg3KtTxY',
      'name': '想你和我们的以后',
      'singer': '苏运莹',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003TUgdg3KtTxY&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003TUgdg3KtTxY&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003TUgdg3KtTxY&key=579621905',
      'time': 272
    }, {
      'id': '001V7Urk0ocmpx',
      'name': '独处的时候',
      'singer': '苏打绿',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001V7Urk0ocmpx&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001V7Urk0ocmpx&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001V7Urk0ocmpx&key=579621905',
      'time': 274
    }, {
      'id': '000MEDNQ05Eo3V',
      'name': '凌晨两点',
      'singer': '李健',
      'url': 'https://api.itooi.cn/music/tencent/url?id=000MEDNQ05Eo3V&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=000MEDNQ05Eo3V&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000MEDNQ05Eo3V&key=579621905',
      'time': 251
    }, {
      'id': '002ZJyxe23CC5d',
      'name': '那个谁',
      'singer': '戴佩妮',
      'url': 'https://api.itooi.cn/music/tencent/url?id=002ZJyxe23CC5d&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=002ZJyxe23CC5d&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002ZJyxe23CC5d&key=579621905',
      'time': 209
    }, {
      'id': '001qfP2R4GcWes',
      'name': '矜持',
      'singer': '萧萧',
      'url': 'https://api.itooi.cn/music/tencent/url?id=001qfP2R4GcWes&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=001qfP2R4GcWes&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001qfP2R4GcWes&key=579621905',
      'time': 296
    }, {
      'id': '0036eosM3VQTWA',
      'name': '烟火',
      'singer': '郭采洁',
      'url': 'https://api.itooi.cn/music/tencent/url?id=0036eosM3VQTWA&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=0036eosM3VQTWA&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0036eosM3VQTWA&key=579621905',
      'time': 239
    }, {
      'id': '003a2Hak2F1s0X',
      'name': '当时的月亮',
      'singer': '王菲',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003a2Hak2F1s0X&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003a2Hak2F1s0X&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003a2Hak2F1s0X&key=579621905',
      'time': 231
    }, {
      'id': '002n0tLu3ATSAX',
      'name': '给从前的爱',
      'singer': '梁静茹',
      'url': 'https://api.itooi.cn/music/tencent/url?id=002n0tLu3ATSAX&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=002n0tLu3ATSAX&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002n0tLu3ATSAX&key=579621905',
      'time': 246
    }, {
      'id': '003mYdf63Mwt9K',
      'name': '被雨困住的城市',
      'singer': '苏打绿',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003mYdf63Mwt9K&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003mYdf63Mwt9K&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003mYdf63Mwt9K&key=579621905',
      'time': 258
    }, {
      'id': '003dDN5U126eCa',
      'name': '我留下的一个生活',
      'singer': '许茹芸',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003dDN5U126eCa&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003dDN5U126eCa&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003dDN5U126eCa&key=579621905',
      'time': 238
    }, {
      'id': '000jl9Z31JFP9P',
      'name': '不散，不见',
      'singer': '莫文蔚',
      'url': 'https://api.itooi.cn/music/tencent/url?id=000jl9Z31JFP9P&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=000jl9Z31JFP9P&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000jl9Z31JFP9P&key=579621905',
      'time': 229
    }, {
      'id': '003ho3Rl22SvDA',
      'name': '睡吧',
      'singer': '陈粒',
      'url': 'https://api.itooi.cn/music/tencent/url?id=003ho3Rl22SvDA&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=003ho3Rl22SvDA&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003ho3Rl22SvDA&key=579621905',
      'time': 247
    }, {
      'id': '002OViea3tghs4',
      'name': 'Forever Young',
      'singer': '艾怡良',
      'url': 'https://api.itooi.cn/music/tencent/url?id=002OViea3tghs4&key=579621905',
      'pic': 'https://api.itooi.cn/music/tencent/pic?id=002OViea3tghs4&key=579621905',
      'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002OViea3tghs4&key=579621905',
      'time': 313
    }]
  }
}
export const getHotKeyMock = {
  'code': 0,
  'data': {
    'hotkey': [{
      'k': '该死的温柔 ',
      'n': 405528
    }, {
      'k': '不能说的秘密 ',
      'n': 341521
    }, {
      'k': '盗将行 ',
      'n': 339485
    }, {
      'k': '林俊杰 ',
      'n': 236459
    }, {
      'k': '学到老爱到老 ',
      'n': 212324
    }, {
      'k': '告别的时代 ',
      'n': 182097
    }, {
      'k': '金庸 ',
      'n': 153867
    }, {
      'k': '说谎 ',
      'n': 140139
    }, {
      'k': 'NEVER BE ALONE ',
      'n': 129623
    }, {
      'k': '世界第一等 ',
      'n': 125821
    }, {
      'k': '为你写诗 ',
      'n': 123493
    }, {
      'k': '红尘来去一场梦 ',
      'n': 117485
    }, {
      'k': '沧海一声笑 ',
      'n': 114789
    }, {
      'k': '王力宏 ',
      'n': 113754
    }, {
      'k': '昨日青空 ',
      'n': 102825
    }, {
      'k': '夜之光 ',
      'n': 93973
    }, {
      'k': '梦想的声音 ',
      'n': 89722
    }, {
      'k': '东西女生版 ',
      'n': 79997
    }, {
      'k': '难念的经 ',
      'n': 76663
    }, {
      'k': '王嘉尔 ',
      'n': 75940
    }, {
      'k': '逆光 ',
      'n': 74958
    }, {
      'k': '回忆 ',
      'n': 74127
    }, {
      'k': '爱情有时很残忍 ',
      'n': 68208
    }, {
      'k': '王源 ',
      'n': 67888
    }, {
      'k': '丁当 ',
      'n': 61868
    }, {
      'k': 'IZONE ',
      'n': 61704
    }, {
      'k': '笑傲江湖 ',
      'n': 61218
    }, {
      'k': '欠我个未来 ',
      'n': 60385
    }, {
      'k': '铁血丹心 ',
      'n': 60306
    }, {
      'k': 'MOVE YOUR BODY ',
      'n': 59850
    }],
    'special_key': 'Gai见面吧电台',
    'special_url': 'http://y.qq.com/m/act/hiradio/27.html'
  },
  'subcode': 0
}
export const getTopListMock = {
  'result': 'SUCCESS',
  'code': 200,
  'data': [{
    'id': '6998375386',
    'name': '初夏｜宁静之间流动的缱绻时光',
    'creator': '离歌',
    'createTime': '2019-05-25',
    'pic': 'http://p.qpic.cn/music_cover/Xewa2JUmZ1rQd7ZeuBIZX7tWwy41kStKbwRawhYBbSuVibj5ReccgPw/600?n=1',
    'playCount': '12658'
  }, {
    'id': '6999475744',
    'name': '乐队轰鸣 ・ 能量集结号',
    'creator': '允许部分冷门先热起来',
    'createTime': '2019-05-23',
    'pic': 'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOAQia04Gic1q0aOkg3eOwPH2mkrVRlQDZ5pfQ/600?n=1',
    'playCount': '117687'
  }, {
    'id': '6998129452',
    'name': '未实现的梦想，都谱成了民谣',
    'creator': '离歌',
    'createTime': '2019-05-25',
    'pic': 'http://p.qpic.cn/music_cover/Xewa2JUmZ1rQd7ZeuBIZX7tWwy41kStKuPBdQFzJS5wzUvK3leiaVjA/600?n=1',
    'playCount': '15131'
  }, {
    'id': '6999510998',
    'name': '说唱 ・ 走路带风的中文Flow',
    'creator': '允许部分冷门先热起来',
    'createTime': '2019-05-27',
    'pic': 'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOAQia04Gic1q0aORJVGWwZfDq7CdXIPz173nQ/600?n=1',
    'playCount': '20736'
  }, {
    'id': '6999185881',
    'name': '耳朵探测器 ・ 华语小众男声',
    'creator': '允许部分冷门先热起来',
    'createTime': '2019-05-22',
    'pic': 'http://p.qpic.cn/music_cover/HZnqT8B6sibc2iaxSb6biaOAQia04Gic1q0aO7SEgicofxap1fNXULiaib1LGw/600?n=1',
    'playCount': '148841'
  }, {
    'id': '6998409417',
    'name': '甜向古风集 | 就想和你花前月下',
    'creator': '古韵儿.',
    'createTime': '2019-05-21',
    'pic': 'http://p.qpic.cn/music_cover/iabXcjERfgrA1urbIdQLDtQC5MlRqkXJyuHY5PibhIKbBt8WuFGu2INA/600?n=1',
    'playCount': '27798'
  }, {
    'id': '6992553587',
    'name': '来感受一下Rapper的土味情话好吗',
    'creator': '嘻哈不死',
    'createTime': '2019-05-20',
    'pic': 'http://p.qpic.cn/music_cover/gYgckTuS2l6WP35HkibuA2U3OBH2lW15M6Rud5hw5QeaTmEVVNevXzQ/600?n=1',
    'playCount': '34978'
  }, {
    'id': '6985785928',
    'name': '失眠症候群：二字良曲引“音”入梦',
    'creator': '故里',
    'createTime': '2019-05-16',
    'pic': 'http://p.qpic.cn/music_cover/JGWy4hDbeHGB4lAPwcanXNicAt9xpZPFxYkMx1fbDaC4xv11nLCBZPQ/600?n=1',
    'playCount': '59820'
  }, {
    'id': '6987532596',
    'name': '优质男女歌手同曲翻唱集',
    'creator': '故里',
    'createTime': '2019-05-17',
    'pic': 'http://p.qpic.cn/music_cover/JGWy4hDbeHGB4lAPwcanXIW0FIO3EuDWPoPVokDHYaKoh0sXvRXJZw/600?n=1',
    'playCount': '386605'
  }, {
    'id': '2855574254',
    'name': '古风#山水万程 皆要好运',
    'creator': '即兴',
    'createTime': '2019-05-14',
    'pic': 'http://p.qpic.cn/music_cover/gkhx0ibxHOveXdZIHNlYUo4k1I4eP3yaV8ibBonZjAm28cKMPhH489kg/600?n=1',
    'playCount': '50623'
  }, {
    'id': '2506141287',
    'name': '国风上美『听时光娓娓道来』',
    'creator': '兔兔睡醒了',
    'createTime': '2019-05-14',
    'pic': 'http://p.qpic.cn/music_cover/ibzBWS82PaXAlM4sehibmQAyMOrcWnrEWibdH0jmNbiacYJTBPejSKn4mA/600?n=1',
    'playCount': '157361'
  }]
}
export const searchSongMock = {
  'result': 'SUCCESS',
  'code': 200,
  'data': [{
    'id': '002MXZNu1GToOk',
    'name': '不能说的秘密',
    'time': 296,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002MXZNu1GToOk&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002MXZNu1GToOk&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002MXZNu1GToOk&key=579621905'
  }, {
    'id': '0013CxwQ4DRfLX',
    'name': '不能说的秘密',
    'time': 341,
    'singer': '林俊杰',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0013CxwQ4DRfLX&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0013CxwQ4DRfLX&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0013CxwQ4DRfLX&key=579621905'
  }, {
    'id': '0037mxZE2kTFNY',
    'name': '不能说的秘密',
    'time': 249,
    'singer': '卓猷燕',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0037mxZE2kTFNY&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0037mxZE2kTFNY&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0037mxZE2kTFNY&key=579621905'
  }, {
    'id': '003IDh0K44WFNG',
    'name': '不能说的秘密',
    'time': 297,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003IDh0K44WFNG&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003IDh0K44WFNG&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003IDh0K44WFNG&key=579621905'
  }, {
    'id': '001CSR773lDZjJ',
    'name': '不能说的秘密',
    'time': 195,
    'singer': 'Hope组合',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001CSR773lDZjJ&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001CSR773lDZjJ&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001CSR773lDZjJ&key=579621905'
  }, {
    'id': '000REyAi11tPDT',
    'name': '不能说的秘密',
    'time': 169,
    'singer': '国民美少女团员',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000REyAi11tPDT&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000REyAi11tPDT&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000REyAi11tPDT&key=579621905'
  }, {
    'id': '000DFIB12NbV3t',
    'name': '不能说的秘密 + Blank Space',
    'time': 193,
    'singer': '金色炸蛋',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000DFIB12NbV3t&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000DFIB12NbV3t&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000DFIB12NbV3t&key=579621905'
  }, {
    'id': '001eeHMq0c1hcV',
    'name': '晴天娃娃',
    'time': 150,
    'singer': '江语晨',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001eeHMq0c1hcV&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001eeHMq0c1hcV&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001eeHMq0c1hcV&key=579621905'
  }, {
    'id': '000aBvbP158Oe4',
    'name': '淡水海边',
    'time': 65,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000aBvbP158Oe4&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000aBvbP158Oe4&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000aBvbP158Oe4&key=579621905'
  }, {
    'id': '002qt7884Xx39s',
    'name': '脚踏车',
    'time': 139,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002qt7884Xx39s&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002qt7884Xx39s&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002qt7884Xx39s&key=579621905'
  }, {
    'id': '004eRmjA04uI7x',
    'name': '不能说的秘密',
    'time': 1270,
    'singer': 'TFBOYS电台',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004eRmjA04uI7x&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004eRmjA04uI7x&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004eRmjA04uI7x&key=579621905'
  }, {
    'id': '001nq1wo1TBi7R',
    'name': '不能说的秘密 (2010香港演唱会)',
    'time': 273,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001nq1wo1TBi7R&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001nq1wo1TBi7R&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001nq1wo1TBi7R&key=579621905'
  }, {
    'id': '003riik2142S4Q',
    'name': '不能说的秘密 (自白版)',
    'time': 287,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003riik2142S4Q&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003riik2142S4Q&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003riik2142S4Q&key=579621905'
  }, {
    'id': '002YUo1T2AXbzg',
    'name': '不能说的秘密',
    'time': 130,
    'singer': 'Tey六弦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002YUo1T2AXbzg&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002YUo1T2AXbzg&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002YUo1T2AXbzg&key=579621905'
  }, {
    'id': '002yZpiN2jPOQG',
    'name': '말할 수 없는 비밀',
    'time': 266,
    'singer': '문명진',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002yZpiN2jPOQG&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002yZpiN2jPOQG&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002yZpiN2jPOQG&key=579621905'
  }, {
    'id': '001SSbin33rFNv',
    'name': '路小雨',
    'time': 99,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001SSbin33rFNv&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001SSbin33rFNv&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001SSbin33rFNv&key=579621905'
  }, {
    'id': '003fStEw4EUu6v',
    'name': 'Secret',
    'time': 85,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003fStEw4EUu6v&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003fStEw4EUu6v&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003fStEw4EUu6v&key=579621905'
  }, {
    'id': '003Knhk52gmVf6',
    'name': '小雨写立可白Ⅰ',
    'time': 75,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003Knhk52gmVf6&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003Knhk52gmVf6&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003Knhk52gmVf6&key=579621905'
  }, {
    'id': '0029KNyc0To4OW',
    'name': '不能说的秘密',
    'time': 335,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0029KNyc0To4OW&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0029KNyc0To4OW&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0029KNyc0To4OW&key=579621905'
  }, {
    'id': '004SqSV31wjGo2',
    'name': '不能说的秘密 (纯音乐)',
    'time': 305,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004SqSV31wjGo2&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004SqSV31wjGo2&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004SqSV31wjGo2&key=579621905'
  }, {
    'id': '002gvH0h3VVLEB',
    'name': '不能说的秘密',
    'time': 295,
    'singer': 'DJ夜猫',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002gvH0h3VVLEB&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002gvH0h3VVLEB&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002gvH0h3VVLEB&key=579621905'
  }, {
    'id': '002jNjCH1QFMBs',
    'name': '不能说的秘密 (吉他版)',
    'time': 233,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002jNjCH1QFMBs&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002jNjCH1QFMBs&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002jNjCH1QFMBs&key=579621905'
  }, {
    'id': '001pjauf3f6mWt',
    'name': '不能说的秘密 (原版伴奏)',
    'time': 249,
    'singer': '卓猷燕',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001pjauf3f6mWt&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001pjauf3f6mWt&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001pjauf3f6mWt&key=579621905'
  }, {
    'id': '003M13c24fHOLH',
    'name': '不能说的秘密 (Live)',
    'time': 285,
    'singer': '강승윤 / 于湉',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003M13c24fHOLH&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003M13c24fHOLH&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003M13c24fHOLH&key=579621905'
  }, {
    'id': '001c0lJ544QCb4',
    'name': '不能说的秘密 (2011天声王牌现场)',
    'time': 123,
    'singer': '张一山',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001c0lJ544QCb4&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001c0lJ544QCb4&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001c0lJ544QCb4&key=579621905'
  }, {
    'id': '003gkyhI4R5ryJ',
    'name': '不能说的秘密 (降调版伴奏)',
    'time': 296,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003gkyhI4R5ryJ&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003gkyhI4R5ryJ&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003gkyhI4R5ryJ&key=579621905'
  }, {
    'id': '001hbyyv1yuoyk',
    'name': '말할 수 없는 비밀',
    'time': 232,
    'singer': '공기남녀',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001hbyyv1yuoyk&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001hbyyv1yuoyk&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001hbyyv1yuoyk&key=579621905'
  }, {
    'id': '000Ga3vm2bRZGb',
    'name': '不能说的秘密',
    'time': 56,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000Ga3vm2bRZGb&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000Ga3vm2bRZGb&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000Ga3vm2bRZGb&key=579621905'
  }, {
    'id': '000hZD621GidgG',
    'name': '不能说的秘密 (MV版)',
    'time': 309,
    'singer': '汪定中',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000hZD621GidgG&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000hZD621GidgG&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000hZD621GidgG&key=579621905'
  }, {
    'id': '003zCA3B3yXEdN',
    'name': '不能说的秘密 (伴奏)',
    'time': 250,
    'singer': '卓猷燕',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003zCA3B3yXEdN&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003zCA3B3yXEdN&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003zCA3B3yXEdN&key=579621905'
  }, {
    'id': '001cyUse0cwhqA',
    'name': 'First Kiss',
    'time': 91,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001cyUse0cwhqA&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001cyUse0cwhqA&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001cyUse0cwhqA&key=579621905'
  }, {
    'id': '002Lt2le2L6cIk',
    'name': '小雨写立可白Ⅱ',
    'time': 100,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002Lt2le2L6cIk&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002Lt2le2L6cIk&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002Lt2le2L6cIk&key=579621905'
  }, {
    'id': '004aSPdJ4839VS',
    'name': '湘伦小雨四手联弹',
    'time': 40,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004aSPdJ4839VS&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004aSPdJ4839VS&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004aSPdJ4839VS&key=579621905'
  }, {
    'id': '000R3exp483oSc',
    'name': '不能说的秘密（Ukulele弹唱）',
    'time': 303,
    'singer': '小sa神',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000R3exp483oSc&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000R3exp483oSc&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000R3exp483oSc&key=579621905'
  }, {
    'id': '000NP1ff056sPs',
    'name': '不能说的秘密',
    'time': 290,
    'singer': '打扰一下乐团',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000NP1ff056sPs&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000NP1ff056sPs&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000NP1ff056sPs&key=579621905'
  }, {
    'id': '001aSkT12fTz4v',
    'name': '不能说的秘密',
    'time': 58,
    'singer': '国民美少女团员',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001aSkT12fTz4v&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001aSkT12fTz4v&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001aSkT12fTz4v&key=579621905'
  }, {
    'id': '004am5Vj3Rm81T',
    'name': '不能说的秘密',
    'time': 48,
    'singer': 'Hope组合',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004am5Vj3Rm81T&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004am5Vj3Rm81T&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004am5Vj3Rm81T&key=579621905'
  }, {
    'id': '001gCHgi2EKmkS',
    'name': '不能说的秘密',
    'time': 194,
    'singer': 'Hope组合',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001gCHgi2EKmkS&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001gCHgi2EKmkS&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001gCHgi2EKmkS&key=579621905'
  }, {
    'id': '001vWD0r0dyUdB',
    'name': '말할 수 없는 비밀',
    'time': 266,
    'singer': '문명진',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001vWD0r0dyUdB&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001vWD0r0dyUdB&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001vWD0r0dyUdB&key=579621905'
  }, {
    'id': '000tP3FZ2MqKiL',
    'name': '말할 수 없는 비밀',
    'time': 266,
    'singer': '문명진',
    'url': 'https://api.itooi.cn/music/tencent/url?id=000tP3FZ2MqKiL&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=000tP3FZ2MqKiL&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=000tP3FZ2MqKiL&key=579621905'
  }, {
    'id': '002lPgP64ArZ3O',
    'name': '말할 수 없는 비밀',
    'time': 167,
    'singer': '빌리어코스티',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002lPgP64ArZ3O&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002lPgP64ArZ3O&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002lPgP64ArZ3O&key=579621905'
  }, {
    'id': '004RD04W3IcSr6',
    'name': '말할 수 없는 비밀',
    'time': 231,
    'singer': '공기남녀',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004RD04W3IcSr6&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004RD04W3IcSr6&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004RD04W3IcSr6&key=579621905'
  }, {
    'id': '0018pQCD3gEnW4',
    'name': '不能说的秘密+遇见+黑色幽默 (Live)',
    'time': 630,
    'singer': '周杰伦、孙燕姿',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0018pQCD3gEnW4&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0018pQCD3gEnW4&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0018pQCD3gEnW4&key=579621905'
  }, {
    'id': '001oGkwJ1YYuDP',
    'name': '不能说的秘密 + 遇见（Live）',
    'time': 288,
    'singer': '孙燕姿 / 周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001oGkwJ1YYuDP&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001oGkwJ1YYuDP&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001oGkwJ1YYuDP&key=579621905'
  }, {
    'id': '0030daca20291D',
    'name': "不能说的秘密+yumeji's theme+情书+永恒的誓约 (第50届金马奖颁奖典礼现场)",
    'time': 475,
    'singer': '郎朗',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0030daca20291D&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0030daca20291D&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0030daca20291D&key=579621905'
  }, {
    'id': '004P22Lb3D40aN',
    'name': 'Angel',
    'time': 113,
    'singer': '周杰伦',
    'url': 'https://api.itooi.cn/music/tencent/url?id=004P22Lb3D40aN&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=004P22Lb3D40aN&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=004P22Lb3D40aN&key=579621905'
  }, {
    'id': '00397zgP3fEhKA',
    'name': '早操',
    'time': 96,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=00397zgP3fEhKA&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=00397zgP3fEhKA&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=00397zgP3fEhKA&key=579621905'
  }, {
    'id': '001wmMSC2nWWJI',
    'name': '斗琴',
    'time': 134,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001wmMSC2nWWJI&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001wmMSC2nWWJI&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001wmMSC2nWWJI&key=579621905'
  }, {
    'id': '001shBLA3Q9Bad',
    'name': '彩虹旋律',
    'time': 164,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001shBLA3Q9Bad&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001shBLA3Q9Bad&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001shBLA3Q9Bad&key=579621905'
  }, {
    'id': '001iKUyh0Y4n5j',
    'name': '你是我不能说的秘密。',
    'time': 493,
    'singer': '程一',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001iKUyh0Y4n5j&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001iKUyh0Y4n5j&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001iKUyh0Y4n5j&key=579621905'
  }, {
    'id': '0000QsIQ2O9oX1',
    'name': '我与陛下不能说的秘密',
    'time': 139,
    'singer': '凹凸君',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0000QsIQ2O9oX1&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0000QsIQ2O9oX1&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0000QsIQ2O9oX1&key=579621905'
  }, {
    'id': '0048nr2n2An8FO',
    'name': '爱你，是我不能说的秘密',
    'time': 748,
    'singer': '晨曦微露',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0048nr2n2An8FO&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0048nr2n2An8FO&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0048nr2n2An8FO&key=579621905'
  }, {
    'id': '002O62TG4Hi3lG',
    'name': '你是我心里最深处，不能说的秘密',
    'time': 1344,
    'singer': '微音',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002O62TG4Hi3lG&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002O62TG4Hi3lG&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002O62TG4Hi3lG&key=579621905'
  }, {
    'id': '002fQIoM1MIgnP',
    'name': '《不能说的秘密》：你的存在对我很重要',
    'time': 945,
    'singer': '淘漉音乐',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002fQIoM1MIgnP&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002fQIoM1MIgnP&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002fQIoM1MIgnP&key=579621905'
  }, {
    'id': '003yqxnf0aRgsP',
    'name': '淡水海边',
    'time': 48,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003yqxnf0aRgsP&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003yqxnf0aRgsP&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003yqxnf0aRgsP&key=579621905'
  }, {
    'id': '002EjHEE2qZlh4',
    'name': '周董歌里不能说的秘密丨生日歌',
    'time': 604,
    'singer': '璟炜电台',
    'url': 'https://api.itooi.cn/music/tencent/url?id=002EjHEE2qZlh4&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=002EjHEE2qZlh4&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=002EjHEE2qZlh4&key=579621905'
  }, {
    'id': '001ELXdd1qK9yv',
    'name': '想你，成了不能说的秘密',
    'time': 1277,
    'singer': '微音',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001ELXdd1qK9yv&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001ELXdd1qK9yv&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001ELXdd1qK9yv&key=579621905'
  }, {
    'id': '003XFuWe2GLReo',
    'name': '130.这些不能说的秘密，我悄悄告诉你',
    'time': 1119,
    'singer': '歪果Wiggle电台',
    'url': 'https://api.itooi.cn/music/tencent/url?id=003XFuWe2GLReo&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=003XFuWe2GLReo&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=003XFuWe2GLReo&key=579621905'
  }, {
    'id': '0009YAA432yg5Q',
    'name': '不能说的秘密secret钢琴曲',
    'time': 88,
    'singer': '网络歌手',
    'url': 'https://api.itooi.cn/music/tencent/url?id=0009YAA432yg5Q&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=0009YAA432yg5Q&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=0009YAA432yg5Q&key=579621905'
  }, {
    'id': '001fBpD1313m2Q',
    'name': 'First Kiss',
    'time': 48,
    'singer': '不能说的秘密',
    'url': 'https://api.itooi.cn/music/tencent/url?id=001fBpD1313m2Q&key=579621905',
    'pic': 'https://api.itooi.cn/music/tencent/pic?id=001fBpD1313m2Q&key=579621905',
    'lrc': 'https://api.itooi.cn/music/tencent/lrc?id=001fBpD1313m2Q&key=579621905'
  }]
}
export const getLyricMock = `[ti:门]
[ar:魏如萱]
[al:201295]
[by:]
[offset:0]
[00:00.00]门 (Outside the Door - 魏如萱 (Waa Wei
[00:09.73]词：魏如萱
[00:19.47]曲：黄玠
[00:29.21]跟你说了晚安之后 我还坐在门口
[00:35.69]
[00:36.43]睫毛膏和眼线 黑黑的往下流
[00:43.17]
[00:43.74]手上紧握著没有声音的你爱我
[00:50.69]
[00:51.31]雨下过 就从此不能是朋友
[00:58.77]怕你忘了我 你要忘了我
[01:05.86]我们的照片 丢在垃圾桶
[01:09.63]骄傲抬起头 假装没什么
[01:13.22]怕你忘了我 你要忘了我
[01:21.44]破掉的心 留在你家楼下的门口
[01:33.13]
[01:43.19]头发很乱加黑眼圈 的你也在门后
[01:50.46]戴著黑框眼镜 装酷的走啊走
[01:57.06]
[01:57.79]一定会好舍不得 就这样说分手
[02:05.21]叹口气 就从此不能是朋友
[02:12.35]怕你忘了我 你要忘了我
[02:18.97]
[02:19.54]我们的照片 丢在垃圾桶
[02:23.38]骄傲抬起头 假装没什么
[02:27.15]怕你忘了我 你要忘了我
[02:34.76]
[02:35.28]破掉的心 留在我家楼下的门口`
