const IndexPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>katzShortener</title>

    <link rel="stylesheet" href="/statics/css/main.css">
  </head>
  <body>
    <div class="container">
      <div class="main-card">
        <form action="/api/create" method="post">
          <input type="text" placeholder="Enter your Link.." required />
          <br>
          <input type="text" placeholder="Enter slug.. (optional)" />
          <br>
          <button type="submit">
            Shorten!
          </button>
        </form>
      </div>
    </div>
  </body>
</html>
`

module.exports = IndexPage
