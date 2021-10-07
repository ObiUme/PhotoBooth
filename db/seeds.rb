# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: 'Obi', password: 'password', avatar: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png', is_photographer: true)
user2 = User.create(username: 'Brenna', password: 'password', avatar:'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png',   is_photographer: true)
user3 = User.create(username: 'Chike', password: 'passowrd', avatar:'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png',  is_photographer: true)

Schedule.create(name: 'Obi Ume', photographer_id: user2.id, client_id: user.id, length: 60, shoot_description: 'Professional', email: 'obi1@yahoo.com', consultation: '2021-12-05 11:00:00'  )
Schedule.create(name: 'Brenna Fahey', photographer_id: user.id, client_id: user2.id, length: 60, shoot_description: 'Fitness', email: 'brenna1@yahoo.com', consultation: '2021-11-05 11:00:00'  )


Photo.create(title: 'brenna', image:"https://lh3.googleusercontent.com/D_gid6dVg3JON_hP4GBJwuWsYNZYf2F2h-oRheptF3ALXR7ngIblWlKaybcSW_FxLNGNoKJSAMG7X0LyU0crU5--eX-a7EDfLXjXqX5nqwTHncRX39CcryFdpRxUN-yWldHyVSftIUw=w600-h315-p-k", description: 'social media', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'obi', image:"https://lh3.googleusercontent.com/ZdZhO6aaCd0v9sicCKGYRsEv_pNDptUrRyzJL7Ui9EpGlAcxjKpp3F5GvAgsHcMDHf9DExBrzawehRI50nHKnOVITSNNJ3EgGAN35BndExyyEbXE1jX-vY0rgtxt0pIvxS__iCw-82o=w600-h315-p-k", description: 'social media', photographer_name: 'Brenna Fahey', user_id: user.id)

Photo.create(title: 'us', image:"https://lh3.googleusercontent.com/gtg-OiL94SCMVU5g51-WeeO-MZTOT7rAm7h9zljhWEGRsNSemOSFOuNQO_WzMlOMGL7NYjCWFqge0WT0EXV44aDes13CTAH5U9XWkDrNIeMYZ60ndsQnrEQR5Sgg9yYrvailWZQS6ao=w600-h315-p-k", description: 'personal', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'brenna', image:"https://lh3.googleusercontent.com/lYkbGI-kNaVIqIe-7hK71BmLAeiG4atThYoQl7jyd15GXW7cA5TbSW4vBTZPI_70KsPbRQKjoHuXMU23Fj_OF9a0KwyQXO9-96dfVkJTBPDlv50xXzmIaplChJO3-BfOz6_Iam6yPnA=w600-h315-p-k", description: 'personal', photographer_name: 'Brenna Fahey', user_id: user.id)


Photo.create(title: 'blaidd', image:"https://lh3.googleusercontent.com/REcu9X6-BLirPh3On-4yykDldAp7XuYjb7YvnAeH_yLYes0KwBRFSO9l9BB8YJZTZYOK81rheXdRF20xJFCswMArQChVPnZls4AtJN5D3EgXaoGRrp6D-9nUsNppMD_nU4Rtn8xie68=w600-h315-p-k", description: 'pet', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'siblings', image:"https://lh3.googleusercontent.com/r0p7E6WdTlS8yQ6SX8UMvEhDLfYYVAXw5PW7Qtpm2qQ6quE_rYycVdqdm6zjrpBhoOXMBGLtlzU9oPm7kWt6qKjcEF5AbHU68cj9A4JVp77YtOW1qAO-5lu7M_CS0NoHffvGM_7Xz0k=w600-h315-p-k", description: 'pet', photographer_name: 'Obi Ume', user_id: user.id)
Photo.create(title: 'anunu', image:"https://lh3.googleusercontent.com/lBfkLR0iT-8-ugbEMFplfDqc_fh27zxBRaaaXPOvC7ACnHbQ5eEn_ht1rTQ99qsIso9m14aTiB2p2HDvGEbVSjElwqHTz3m4sepgRPn84iAQ6Ly0Wxj6_69iimkfIgoIb9xlEJo3csg=w600-h315-p-k" , description: 'pet', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'siblings', image:"https://lh3.googleusercontent.com/ebZ4jWl92H0szcnhlkbuAGdbaRuQ9rTfjXmpfJqYt6FrJrisSuziLF4NnoiUzCaKZz9ONgB72pZhzowV6zsFQVxn_JSLhdDWdN_X0mjIIWLCox2E62GSQsZv19PzOqqgH_7AqMe2_Ak=w600-h315-p-k", description: 'pet', photographer_name: 'Brenna Fahey', user_id: user.id )
Photo.create(title: 'blaidd', image:"https://lh3.googleusercontent.com/W0eRHoa36CKjlbAoFD2-sKdHeKbXxUW71yixZ2Y3xYITCQ1eQoOQQtDOe72biC2AtrOPO3MV9HlUI8VkssinE-kPzKDUSsnFRnigNxUQnd_Mr4hMkcdFmGgKQyRK9K-5wCH4F7Ko_NE=w600-h315-p-k", description: 'pet', photographer_name: 'Brenna Fahey', user_id: user.id )

Photo.create(title: 'jeanie', image:"https://lh3.googleusercontent.com/WJChvagHPpeTiXKnWx5FEetGxYVyzpai9iEw0j3Rojj3HLNgGfpfrrQk54Z6dFo1YJah-HoGFUFdq1VUFhqZCmfd0DxH6gFHduwzrwPWmcDbfKLk4vE_DK0No0OEaqyXA9-w3b7CW0M=w600-h315-p-k", description: 'fitness', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'jeanie', image:"https://lh3.googleusercontent.com/At7gho2ZYmRdJjg5YuYcq36ZrifckBY-SGB6I15xWqYc3HzVlFw_ctnLfIHmx4B_kvzyiuy7t8o4LWs90zcPHYc-6eiJv_gPgJxHhiRjfN0w8_RTeUJ9v1RghPA8gZ58P987SAe4giM=w600-h315-p-k", description: 'fitness', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'jeanie', image:"https://lh3.googleusercontent.com/mrntrP9KTgiyMIolZmu0rbOeR7nZ1JKg6jMpxaG_y2_ja2bUhvl8EzNle3aJ83lKtRCJkwq8yjCQ1ALf5ZrSRUUKVBz-bXYQA9LI3HaQJZmVUEgMZdXnIL8PGwsfVvK0IOieEww8EGo=w600-h315-p-k", description: 'fitness', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'jeanie', image:"https://lh3.googleusercontent.com/4A4PYjcRLQr9OexJkbMLw9w3OFXWBuur-3u0vRxl29BXgP0kLbctvj6O0oomdEoXN7yDxY3Bt0jiSf9BLkwtIqqDDzANV6JYX6zXX6POqXLaLWJ10PCl_X2-tTq-Cn2qEfyxC6B0Tl0=w600-h315-p-k", description: 'fitness', photographer_name: 'Brenna Fahey',  user_id: user.id)


Photo.create(title: 'the_ring', image:"https://lh3.googleusercontent.com/YBB3qV9qTBQPDEPtcWj4n9sFXnLIBTjmVc8tFWWKNd5pWg-vDkcDgcu9SpXZGQ2x7wNwEpl2kHOCS9kjpGsrzp78VqjnDY86tBn4EHdwY76rcvEsLKJMalU9tuzTeI8nJwXIe_6HqsI=w600-h315-p-k", description: 'professional', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'jaclyn', image:"https://lh3.googleusercontent.com/cEu8Z9jCaxSSvgVQ95JIGqKeu6duyOuGDHysntLEoV2Ff4H9k9J9BbP8dL2LleLzm-YMGhI8zWTcH89yg3lcbKGf8w1wyHHGFkIowyWCHGbEG_dI2z3cTws2GdNyudzaqq4Ah6piUsw=w600-h315-p-k", description: 'professional', photographer_name: 'Brenna Fahey',  user_id: user.id)
Photo.create(title: 'wedding', image:"https://lh3.googleusercontent.com/gEVlSNde4mtCRpEXDzsuZwsN4jmEbpAOip0Oxp-TQ5QU3wtnbWyTFnnKU7wZRqfpFseqTrE0_1VdtBAuISQcyXRMwA_ynR1KLy6-cZ_krgnMnuf5ofWWzSmmOFksMTDcZoJXimtTwgk=w600-h315-p-k", description: 'professional', photographer_name: 'Josh Tasdemir',  user_id: user.id)
Photo.create(title: 'anunu', image:"https://lh3.googleusercontent.com/xd9_YGWfFd-7LPXN3nhqY4e6R-Q_y_Z5TxWpP05s-CE7ErcboDi7bP18qChDdf3erwFpl_qlvUzGLnVpBDTwg6NgPI-OlB8XE80S53ARmZW8lVsqEFkM7Uxseby5kd9Yzwq9CbMbnB0=w600-h315-p-k", description: 'professional', photographer_name: 'Brenna Fahey', user_id: user.id)


