import Image from "next/image";
import styles from "./page.module.css";
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
    <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">signup</a></button>
  </form>
</nav>
    </div>
  </div>
</nav>
  </div>
  <div className="container-fluid">
  <div id="carouselExample" className="carousel slide">
  
 <div>
  <div className="card mb-3">
    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448637177_3644653962412949_7084819343299832374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ichypwRXZDoQ7kNvgFig0Yz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEZTx4vTuAJMqPz8J8UHdja2pKhLzYtLlaKX8lOOXe27Q&oe=66B31193" className="card-img-top" alt="..." weight={60} height={1000}/>
    <div className="card-body">
      <h5 className="card-title">เกย์ คือ</h5>
      <p className="card-text">เกย์ (อังกฤษ: Gay) เป็นศัพท์ที่โดยหลักสื่อถึงบุคคลที่มีรสนิยมหรือพฤติกรรมแบบรักร่วมเพศ เดิมมีความหมายว่า 'ไร้กังวล', 'ร่าเริง' หรือ 'สดใสและสะดุดตา</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>

</div>

</div>

    
  <div className="row ">
  <div className="card" style={{width: '39.6rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqxDZe8BZUpWLsWxRv-qccIyLpeC03dLRdg&s" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">โลเก</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.facebook.com/TheCarlton4150" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div className="card" style={{width: '39.6rem'}}>
  <img src="https://1417094351.rsc.cdn77.org/publicassets/9425919/images/5dd247abe09c18b4edd04bd664c7cf59_1690123800.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">พรี้หลามใจเกเร</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.facebook.com/profile.php?id=100023319908389" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
<div className="card" style={{width: '39.6rem'}}>
  <img src="https://cdn.readawrite.com/articles/7056/7055067/thumbnail/large.gif?1" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">พรี้โตใจเกเร</h5>
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