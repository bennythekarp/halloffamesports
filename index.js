const express = require('express')
const app = express()
const ejsMate = require('ejs-mate')
const path = require('path')
/* const {google} = require('googleapis')
const keys = require('./keysHoF.json') */

const mongoose = require('mongoose')

const Camper = require('./models/camper')

mongoose.connect('mongodb://localhost:27017/hallOfFameSports', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('mongo connection open')
   })
   .catch(err => {
      console.log('mongo connection ERROR')
      console.log(err)
   })

/* const client = new google.auth.JWT(
   keys.client_email,
   null,
   keys.private_key,
   ['https://www.googleapis.com/auth/spreadsheets']
)
client.authorize(function (err) {
   if (err) {
      console.log(err)
      return
   } else {
      console.log('connected!')
   }
}) */
/* const gsPost = async (client, camper) => {
   let gsapi = google.sheets({ version: 'v4', auth: client })
   console.log(camper)
   console.log(camper.signature)
   let array = [[
      `${camper.name.last}, ${camper.name.first}`,
      camper.gender,
      `${camper.address.street}, ${camper.address.city}, ${camper.address.state} ${camper.address.zip}`,
      `${camper.dob.year}-${camper.dob.month}-${camper.dob.day}`,
      Object.values(camper.session).toString(),
      camper.student,
      camper.parent,
      camper.relation,
      `work: ${camper.phone.work} / cell: ${camper.phone.cell} / home: ${camper.phone.home}`,
      camper.emergencyContact,
      `emergency cell: ${camper.emergencyPhone.cell} / emergency cell2: ${camper.emergencyPhone.cell2}`,
      camper.parentsEmail,
      camper.hearAbout,
      camper.referal,
      camper.restrictions,
      camper.conditions,
      camper.medications,
      camper.allergies,
      camper.dietary,
      camper.photoRelease,
      camper.signature
   ]]
   const updateOptions = {
      spreadsheetId: '1gR7nZcCYOrqZ4Y5rKhHDw15WOMYDYUZ4rwgz0Y2DrHA',
      range: 'campers',
      valueInputOption: 'USER_ENTERED',
      resource: { values: array }
   }
   let res = await gsapi.spreadsheets.values.append(updateOptions)
   console.log(res)
} */

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
// to parse form data
app.use(express.urlencoded({ extended: true }))
// to parse json
app.use(express.json())

app.get('/', (req, res) => {
   res.redirect('home')
})

app.get('/home', (req, res) => {
   console.log('home page')
   res.render('home')
})

app.get('/form', (req, res) => {
   console.log('new registration')
   res.render('form')
})
app.get('/pricing', (req, res) => {
   console.log('pricing page')
   res.render('pricing')
})
app.get('/pros', (req, res) => {
   console.log('meet the tennis pros')
   res.render('pros')
})
app.get('/contact', (req, res) => {
   console.log('contact page')
   res.render('contact')
})
app.get('/comingsoon', (req, res) => {
   console.log('coming soon')
   res.render('comingSoon')
})

app.post('/register', async (req, res) => {
   console.log(req.body)
   let dob = `${req.body.dob.year}-${req.body.dob.month}-${req.body.dob.day}`
   console.log(dob)
   const newCamper = new Camper(req.body)
   await newCamper.save()
   console.log(newCamper)
   /* gsPost(client, req.body) */
   res.render('success')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`listening on port ${port}`)
})