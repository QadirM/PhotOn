# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Photo.delete_all

guest = User.create(username: "Guest",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228240/srkgz4jdnmuhysnukfbb.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490227896/veexvygfkdpm2jmg4md8.jpg",
  bio: "Where others see soulless architecture and drab surroundings, I try to see interesting shapes and angles, interplay of light and shadow, juxtapositions of images and themes."
  );

u1 = User.create(username: "Michael",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228237/wxfzy8the3twa43tmks6.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490227896/tydyswunn6zuhdipjmqu.jpg",
  bio: "Photographer | Emmy Nominated Time Lapse Cinematographer | Visual Artist"
  );

u2 = User.create(username: "Ethan",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228245/dp9mr10xd5epnpyhcrz8.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490227898/ettlag2p0esoco6cnvoi.jpg",
  bio: "Australian based portrait and travel photographer"
  );

u3 = User.create(username: "Sophia",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228238/tv1ptf99rghnyyscbzur.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490227908/yhhjcnpfrd8sfgy4zahz.jpg",
  bio: "Singaporean landscape and architecture photographer"
  );

u4 = User.create(username: "Isabella",
  password: "password",
  cover_url: "http://res.cloudinary.com/qadir/image/upload/v1490228246/amxstvuhevcvfqxnuaya.jpg",
  profile_url: "http://res.cloudinary.com/qadir/image/upload/v1490227902/lrbfh6tebm7a5gibvxjn.jpg",
  bio: "I don't shoot what it looks like, I shoot what it feels like"
  );


Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490220835/user1/pxqynm8sxjdhasxxlsq5.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221192/user1/drvbhwyiy4kxi0rwvdus.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221187/user1/uxrj0xe9vtyuiro31oqd.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221186/user1/dmrdwxkzfryy92yd5nie.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221186/user1/ibttxov9vafwgmwzqkdf.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221184/user1/gvgedcfxva667gem4dvm.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221184/user1/vnuevyy5t0mogh8mksd6.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221179/user1/mnuzqxahzugrax4wisu3.jpg", description: "", user_id: u1.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221012/user1/gjsvxvywkzopowkbvdtr.jpg", description: "", user_id: u1.id)

Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221793/yc8arrllwsw0plnlgyxa.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221798/xztubotdkt1n0rwhv09v.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221799/zlma1nwohirghnecmt87.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490221808/utpd6pghncocb5l6vmik.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226017/ffhftwvlfjtn32d0gxxy.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226018/dfqhya44yvxfn6mbpwmr.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226019/npifbgvkhscrqtze825n.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226024/hlw8vigch7zm7ta8mgwm.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226027/eggzbm23lxvwskwefjvo.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226027/p4qq7skofevumcicixeg.jpg", description: "", user_id: guest.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226028/tvnoaprk85xpbsbjvox3.jpg", description: "", user_id: guest.id)

Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226330/r4zelnlbusbn8puw6wrn.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226333/mvxqq47q9npvnx1mwxtm.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226336/l4x4vyjgxuorfdclwecf.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226338/ndl30ahjlety7bugqmhw.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226341/qx6yhg2d35j1hspop8ge.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226343/vfzz0awlp08cvb4lbamb.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226344/kullh8uqbcn94nhq7lxy.jpg", description: "", user_id: u2.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226348/rogeglazcf0debfk7a05.jpg", description: "", user_id: u2.id)

Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226484/wgw4reov0ukl8wuxui2s.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226490/w5ctlrttdhqkuwrqw6bz.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226492/y60kb7sky9laqrvnsgph.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226496/nhrevbhmkswspvxzh6kn.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226496/jjssya706skjo6tbi76n.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226503/djks06puzsyssrmmmlhj.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226503/hddoyndklkpnebfpju98.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226504/vh0ymd5ccclsmg4j5cye.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226506/fhbtjyjoewvuigrdhyd6.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226506/yu8vagxcb8auh3ixqldu.jpg", description: "", user_id: u3.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226510/o0mflf3n9z0ia303hj6u.jpg", description: "", user_id: u3.id)

Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226704/oguagf4ka6wssymvbmkj.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226707/mmxnjhza0kp3enqmicfp.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226708/ox6f9w4fw3ikqcb9f50s.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226710/jot8wzfwslgfrkfurdlw.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226713/iqp7bcvayfmw08ixkic0.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226716/yznmslf396vwyvgqv4iq.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226717/kqterbzs9i4gwffu83ps.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226718/le7gse4zvqgelazmp0zx.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226719/gpkwplxokkzrktjpt65k.jpg", description: "", user_id: u4.id)
Photo.create(title: "sss", url: "http://res.cloudinary.com/qadir/image/upload/v1490226719/cew38reihdobmdllq4ed.jpg", description: "", user_id: u4.id)


# default profile photo

# http://res.cloudinary.com/qadir/image/upload/v1490228344/mpixizp0lioxmh9w0l50.png


# default cover photo

# http://res.cloudinary.com/qadir/image/upload/v1490228320/th1bpj05jbdt7in5ehyl.png
