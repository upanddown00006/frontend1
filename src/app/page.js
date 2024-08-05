export default function Home() {
  return(
  <>
  <div className="text-center ">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"  href="#"><img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/310999359_104386182454658_3734706181317281372_n.jpg?stp=c77.56.213.213a_dst-jpg_s160x160&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=7BF6bX1PYbEQ7kNvgHlfvt8&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCQxSlwM6kmfWtY6i5g0CLa-ShM8oExWwUOib8_rY38VQ&oe=66913E4F" alt="" width={100}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/album/">Service</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">Contact</a>
        </li>
      </ul>
      <nav className="navbar bg-body-tertiary">
  <form className="container-fluid justify-content-start ">
    <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">signin</a></button>
    <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link"  href="/signup">signup</a></button>
  </form>
</nav>
    </div>
  </div>
</nav>

  </div>
  <div className="container-fluid">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://article.tcdc.or.th/uploads/article-detail-img/tmp/ecVEjuYKA7dk9ZCL2l6W84eSm10zV5LoG6Oflyzj.jpeg?10102023045648" className="d-block w-100  " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thonglorpet.com/_content_html_editor_upload/images/0B520ADA-2CE7-3912-A491-13C27A99ECC4.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thonglorpet.com/_content_html_editor_upload/images/0B520ADA-2CE7-3912-A491-13C27A99ECC4.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
  <div className="row ">
  <div className="card" style={{width: '39.6rem'}}>
  <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/318474286_1167505503972267_3838078409158600808_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1tvTrPxn4JoQ7kNvgHeYY5v&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYAii6mkXsZjVZc4X4_zHah-IQRe8gRXMqZvT5WhEsWpew&oe=66911F8F" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">ยอด เก</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.facebook.com/TheCarlton4150" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: '39.6rem'}}>
  <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/316041110_1279123546208297_4046811996068980516_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=8lsXRpBfkycQ7kNvgGUczR4&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYBIqdsoDbWsjTZuAx8NqQf0iJck0uBU8qG5jb4QTfUzOA&oe=66914A37" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">มหา เกไม่มีใครเทียบติด</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.facebook.com/profile.php?id=100023319908389" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
<div className="card" style={{width: '39.6rem'}}>
  <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/412689284_1116585446032744_5723252026230995107_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=g81v6nqXTtIQ7kNvgFBGvhc&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYDv-elTbXKPs7fTIZXBGhIznRm_Zen-joWOyQIrPyFtvw&oe=669136B2" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">สุดเก</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.facebook.com/nicky.phasut.9" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
  <div className="row">
    <div className="col-md-14  bg-white p-4">
      © copy Gree
    </div>
  </div>
</div>
  </>
  );
}