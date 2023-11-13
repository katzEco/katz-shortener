const IndexPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>katzShortener</title>

    <link rel="stylesheet" href="/statics/css/main.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/sweetalert2@11.9.0/dist/sweetalert2.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <div class="main-card">
        <form action="/api/create" method="post">
          <input type="text" placeholder="Enter your Link.." required />
          <br />
          <input type="text" placeholder="Enter slug.. (optional)" />
          <br />
          <button type="submit">Shorten!</button>
        </form>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.9.0/dist/sweetalert2.all.min.js"></script>
    <script>
      const urlParams = new URLSearchParams(window.location.search);
      const rtnSlug = urlParams.get("slug");
      const status = urlParams.get("status");

      if (status == 1) {
        if (rtnSlug != undefined || rtnSlug != null) {
          Swal.fire({
            title: "Success!",
            text: rtnSlug,
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      }
    </script>
  </body>
</html>
`

module.exports = IndexPage
