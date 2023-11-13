const schema = require('../mongo/schema')

async function RedirectSlug(app) {
  app.get('/:slug', async (req, res) => {
    const slug = req.params['slug']

    console.log(slug)

    let search = await schema.findOne({ slug: slug }).exec()

    if (search != undefined || search != null) {
      res.redirect(search.destination)
    } else {
      res.redirect('/?status=0&slug=' + 'slug+not+found')
    }
  })
}

module.exports = RedirectSlug
