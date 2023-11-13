const schema = require('./mongo/schema')
const String = require('./string')

async function CreateSlug(app) {
  app.post('/api/create', async (req, res) => {
    const body = req.body

    if (body.destination != undefined || body.destination != null) {
      let slug

      if (body.slug === undefined || body.slug === null) {
        let state = true
        let RandomSlug = String()

        while (state) {
          if (
            (await schema.findOne({ slug: RandomSlug }).exec()) != undefined ||
            (await schema.findOne({ slug: RandomSlug }).exec()) != null
          ) {
            RandomSlug = String()
            state = true
          } else {
            state = false
            break
          }
        }

        slug = RandomSlug
      } else {
        slug = body.slug
      }

      const content = {
        slug: slug,
        destination: body.destination,
      }

      const newSlug = new schema(content)

      try {
        newSlug.save()
        res.redirect(
          '/?status=1&slug=' + req.protocol + '://' + req.get('host')
        )
      } catch (err) {
        console.log(err)
        res.redirect('/?status=0&slug=' + err)
      }
    } else {
      console.log('no destination')
      res.redirect('/?status=0&slug=no+destination')
    }
  })
}

module.exports = CreateSlug
