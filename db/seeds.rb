# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: 'obi', password: 'password', is_photographer: true)

Photo.create(title: 'anunu', image:"https://lh3.googleusercontent.com/xd9_YGWfFd-7LPXN3nhqY4e6R-Q_y_Z5TxWpP05s-CE7ErcboDi7bP18qChDdf3erwFpl_qlvUzGLnVpBDTwg6NgPI-OlB8XE80S53ARmZW8lVsqEFkM7Uxseby5kd9Yzwq9CbMbnB0=w600-h315-p-k", description: 'professional', photographer_name: 'Brenna Fahey', user_id: user.id)
Photo.create(title: 'obi', image:"https://lh3.googleusercontent.com/ZdZhO6aaCd0v9sicCKGYRsEv_pNDptUrRyzJL7Ui9EpGlAcxjKpp3F5GvAgsHcMDHf9DExBrzawehRI50nHKnOVITSNNJ3EgGAN35BndExyyEbXE1jX-vY0rgtxt0pIvxS__iCw-82o=w600-h315-p-k", description: 'social media', photographer_name: 'Brenna Fahey', user_id: user.id)
# Photo.create(title: 'blaidd_and_anunu', image:"https://lh3.googleusercontent.com/r0p7E6WdTlS8yQ6SX8UMvEhDLfYYVAXw5PW7Qtpm2qQ6quE_rYycVdqdm6zjrpBhoOXMBGLtlzU9oPm7kWt6qKjcEF5AbHU68cj9A4JVp77YtOW1qAO-5lu7M_CS0NoHffvGM_7Xz0k=w600-h315-p-k", description: 'group_pets', user_id: user.id)
Photo.create(title: 'blaidd', image:"https://lh3.googleusercontent.com/REcu9X6-BLirPh3On-4yykDldAp7XuYjb7YvnAeH_yLYes0KwBRFSO9l9BB8YJZTZYOK81rheXdRF20xJFCswMArQChVPnZls4AtJN5D3EgXaoGRrp6D-9nUsNppMD_nU4Rtn8xie68=w600-h315-p-k", description: 'pet', photographer_name: 'Brenna Fahey',  user_id: user.id)
# Photo.create(title: 'brenna', image:"https://lh3.googleusercontent.com/lYkbGI-kNaVIqIe-7hK71BmLAeiG4atThYoQl7jyd15GXW7cA5TbSW4vBTZPI_70KsPbRQKjoHuXMU23Fj_OF9a0KwyQXO9-96dfVkJTBPDlv50xXzmIaplChJO3-BfOz6_Iam6yPnA=w600-h315-p-k", description: 'personal', user_id:  user.id)
Photo.create(title: 'jeanie', image:"https://lh3.googleusercontent.com/4A4PYjcRLQr9OexJkbMLw9w3OFXWBuur-3u0vRxl29BXgP0kLbctvj6O0oomdEoXN7yDxY3Bt0jiSf9BLkwtIqqDDzANV6JYX6zXX6POqXLaLWJ10PCl_X2-tTq-Cn2qEfyxC6B0Tl0=w600-h315-p-k", description: 'fitness', photographer_name: 'Brenna Fahey',  user_id: user.id)
