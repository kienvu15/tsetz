

/* My Header ---------------------------------------------------------------------------------------------------------*/
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header>
      
        <!--Logo------------------------->
        <a href="/OPT/index.html" class="logo">
        <img src="static/image/taiphim4k.png" class="oppp">
            Phim<span>4K</span>
        </a>
        <!--Menu------------------------->
        <nav>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="menu">
            <li><a href="index.html">Trang Chủ</a></li>
            <li><a href="phimle/phimle.html">Phim Lẻ</a></li>
            <li><a href="phimbo/phimbo.html">Phim Bộ</a></li>
            <li><a href="khophim/khophim.html">Kho Phim</a></li>
            <li><a href="topphim.html">Top Phim</a></li>
        </ul>
        </nav>
        
       

    </header>
    `;
  }
}
customElements.define('header-component', Header);

let menuicon = document.querySelector('#menu-icon');
let menu = document.querySelector('.menu');


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    menuicon.classList.remove('bx-x');
    menu.classList.remove('active');
}

/* LL Popular --------------------------------------------------------------------------------------------------------------*/
class popular1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popular" id="">
               
                
      <!--Conent Silde----------------------->
      <div class="popular-content swiper">
          <div class="swiper-wrapper">
              
              <!--Phimbox 1------------------>
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A83.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNGNlMThiMzUtZTU1Yy00MzhhLWJkMWMtMTc3MjJhNzQxNGI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjI5MjU5OTI@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Học Viện Phù Thủy Nhỏ</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 2------------------>
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A68.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Ninja Rùa: Hỗn loạn tuổi dậy thì</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 3------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A38.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BMTYyOTk3OTQzM15BMl5BanBnXkFtZTcwMjU4NDYyNA@@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Cuộc Chiến Mùa Hè</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 4------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A2.html">
                      <img src="https://images.tbco.app/blob-image/www.movienewsletters.net/photos/309732R1.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Spider Man: Across The Spider Verse</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 5------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A11.html">
                      <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Thị Trấn Gravity Fall</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 6------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A37.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BZTQ1ODExNGEtODVjYi00MTk4LWI1NTktOTM4NDVkYmZkYmQ3XkEyXkFqcGdeQXVyNjkxNzQ2NDI@._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 7-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A71.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNzg5YjQxODQtNTYxNy00YWM3LTkxODktMDBkM2IxMjJjZDYyXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Burn the Witch</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 8-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A19.html">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Vampire-hunter-d-poster.jpg/220px-Vampire-hunter-d-poster.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Vampire Hunter D: Bloodlust</h2></div></a>
                  </div>
              </div>


              <!--Phimbox 9-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A76.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BOGJlZjU5YTAtYjkxMS00YWVhLWFjM2MtNDY3YTc2ZjJhMjM4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 9-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A39.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNzk4MjhhMjEtODM5Zi00ZTJkLWIxY2UtMmYyYzY1N2Y3Zjc0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Ernest và Celestine</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 10-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A63.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BMzkyNTg3MDYxOF5BMl5BanBnXkFtZTgwODM5ODcxMzE@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Bayonetta: Số Phận Đẫm Máu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 11-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A79.html">
                      <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Promare_Key_Visual.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Giao Thức Promare</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 12-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A81.html">
                      <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/j/o/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Josee: Khi Nàng Thơ Yêu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 13-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A69.html">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 14-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A47.html">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Castlevania: Lâu Đài Ma Cà Rồng</h2></div></a>
                  </div>
              </div>

          </div>
            
      </div>
  </section>
      `;
    }
  } 
customElements.define('popular-component', popular1);

/* LL Popular Phone --------------------------------------------------------------------------------------------------------------*/
class popular3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popularphone" id="">
               
                
      <!--Conent Silde----------------------->
      <div class="popularphone-content swiper">
          <div class="swiper-wrapper">
              
              <!--Phimbox 1------------------>
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A83.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNGNlMThiMzUtZTU1Yy00MzhhLWJkMWMtMTc3MjJhNzQxNGI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjI5MjU5OTI@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Học Viện Phù Thủy Nhỏ</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 2------------------>
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A68.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Ninja Rùa: Hỗn loạn tuổi dậy thì</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 3------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A38.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BMTYyOTk3OTQzM15BMl5BanBnXkFtZTcwMjU4NDYyNA@@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Cuộc Chiến Mùa Hè</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 4------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                      <a href="/play-page-1/A2.html">
                      <img src="https://images.tbco.app/blob-image/www.movienewsletters.net/photos/309732R1.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Spider Man: Across The Spider Verse</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 5------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A11.html">
                      <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Thị Trấn Gravity Fall</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 6------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A37.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BZTQ1ODExNGEtODVjYi00MTk4LWI1NTktOTM4NDVkYmZkYmQ3XkEyXkFqcGdeQXVyNjkxNzQ2NDI@._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 7-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A71.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNzg5YjQxODQtNTYxNy00YWM3LTkxODktMDBkM2IxMjJjZDYyXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Burn the Witch</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 8-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A19.html">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Vampire-hunter-d-poster.jpg/220px-Vampire-hunter-d-poster.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Vampire Hunter D: Bloodlust</h2></div></a>
                  </div>
              </div>


              <!--Phimbox 9-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A76.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BOGJlZjU5YTAtYjkxMS00YWVhLWFjM2MtNDY3YTc2ZjJhMjM4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 9-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A39.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BNzk4MjhhMjEtODM5Zi00ZTJkLWIxY2UtMmYyYzY1N2Y3Zjc0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Ernest và Celestine</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 10-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A63.html">
                      <img src="https://m.media-amazon.com/images/M/MV5BMzkyNTg3MDYxOF5BMl5BanBnXkFtZTgwODM5ODcxMzE@._V1_.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Bayonetta: Số Phận Đẫm Máu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 11-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A79.html">
                      <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Promare_Key_Visual.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Giao Thức Promare</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 12-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A81.html">
                      <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/j/o/josee_the_tiger_and_the_fish-vietnamese_poster-cgv.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Josee: Khi Nàng Thơ Yêu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 13-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A69.html">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div></a>
                  </div>
              </div>

              <!--Phimbox 14-------------------->
              <div class="swiper-slide">
                  <div class="head-box">
                  <a href="/play-page-1/A47.html">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img">
                      <div class="box-text">
                          <h2 class="title">Castlevania: Lâu Đài Ma Cà Rồng</h2></div></a>
                  </div>
              </div>

          </div>
            
      </div>
  </section>
      `;
    }
  } 
customElements.define('popularphone-component', popular3);

/* LL Popular2 --------------------------------------------------------------------------------------------------------------*/
class popular2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="popular2" id="">
               
                <div class="pp2">
                
                <!--Conent Silde----------------------->
                <div class="popular-content2 swiper">
                    <div class="swiper-wrapper">

                        <!--Phimbox 3------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                                <a href="/play-page-1/A100.html">
                                <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/08/30/jujutsu-kaisen-season-2-shibuya-arc.jpeg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Chú Thuật Hồi Chiến Mùa 2</h2></div></a>
                            </div>
                        </div>

                        <!--Phimbox 7-------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                            <a href="/play-page-1/A84.html">
                                <img src="https://jambareeqi.files.wordpress.com/2018/01/lwa-enchant.jpg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Học Viện Phù Thủy: Cuộc Diễu Hành Đầy Mê Hoặc</h2></div></a>
                            </div>
                        </div>

                        <!--Phimbox 4------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                                <a href="/play-page-1/A62.html">
                                <img src="https://images1.resources.foxtel.com.au/store1/mount1/FBO/2019/I@100676_L.jpg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Những Chú Chim Giận Dữ Phần 2</h2></div></a>
                            </div>
                        </div>

                        <!--Phimbox 2------------------>
                        <div class="swiper-slide">
                            <div class="head-box">
                                <a href="/play-page-1/A75.html">
                                <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/05/game4v-belle-2.jpeg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Belle: Rồng và Công Chúa Tàn Nhang</h2></div></a>
                            </div>
                        </div>


                        <!--Phimbox 5------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                            <a href="/play-page-1/A14.html">
                                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F780A71F1F76A6E2D73EDB1E39B286215E1034613B9DDCC0E99C8D9ECCBE33AD/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Gia Đình Nhà Cáo | Ngài Cáo Tuyệt Vời</h2></div></a>
                            </div>
                        </div>

                        <!--Phimbox 6------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                            <a href="/play-page-1/A37.html">
                                <img src="https://images7.alphacoders.com/817/817794.jpg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Hầu Gái Rồng Nhà Kobayashi</h2></div></a>
                            </div>
                        </div>

                        

                        <!--Phimbox 7-------------------->
                        <div class="swiper-slide">
                            <div class="head-box">
                            <a href="/play-page-1/A20.html">
                                <img src="https://images.thedirect.com/media/article_full/dungeons-and-dragons-honor-among-thieves-cast-characters.jpg" alt="" class="img">
                                <div class="box-text">
                                    <h2 class="title">Ngục Tối và Rồng: Danh Dự Của Kẻ Trộm</h2></div></a>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                <today-component></today-component>

            </section>
      `;
    }
  } 
customElements.define('popular2-component', popular2);

/* Today --------------------------------------------------------------------------------------------------------------*/
class today extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!---Today-->
                <div class="optp">
                    <div class="heading">
                        <a href="#"><i class='bx bx-question-mark'></i><span>Hôm nay xem gì</span><i class='bx bx-question-mark'></i></a>
                        </div>


                <div class="optp-content">
               
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                <a href="/play-page-1/A86.html">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p35599_v_v10_ac.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Robots</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thành Phố Robot</h2></div>
                </div>


                 <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A67.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/4c4f5700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Good Will Hunting</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chàng Will Tốt Bụng</h2></div>
                </div> 

                       
              <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A73.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Howl Moving Castle</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div>
                </div>
               
                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A74.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZDdiZGE0N2EtNTMxMy00NDVjLTg0MDktYmE0ZTA4MmMyODM1XkEyXkFqcGdeQXVyMTUyMzg5NzM2._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">One More Time</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Sống Lại Tuổi 18</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A78.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Paprika</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Giấc Mơ</h2></div>
                </div>

               <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A80.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjFkNWZjNGYtNzlkOS00NGZmLWE5ODQtMzNjNTY4YTU1MzVlXkEyXkFqcGdeQXVyNzA3ODUyNzY@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Cô Gái Ngoại Tộc</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Girl From the Other Side</h2></div>
                </div>
                    
                </div>

            </div>
      `;
    }
  } 
customElements.define('today-component', today);

/* Moi Cap Nhap --------------------------------------------------------------------------------------------------------------*/
class newm extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimmoi" id="">
      <!--Heading-->
      <div class="phimmoi1">
      
          
      <!--Phim Moi Sub Content---------------------------------->
      <div class="moiphim">
      
          <div class="heading">
          <a href="#"><i class='bx bx-timer'></i><span>Phim mới cập nhập</span></a>
          </div>
      <div class="phimmoi-content">
          
          <!--box1------------------------------------------>
          <div class="movie-box">
          <a href="/play-page-1/A14.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTk4Mjk0Mzg4OV5BMl5BanBnXkFtZTcwMTg4NzYwMw@@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Fantastic Mr Fox</h2></div>
              <div class="low-text">
                  <h2 class="title2">Gia đình nhà cáo</h2></div>
          </div>

          <!--box2------------------------------------------>
          <div class="movie-box">
          <a href="/play-page-1/A15.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Pacific Rim</h2></div>
              <div class="low-text">
                  <h2 class="title2">Siêu đại chiến</h2></div>
          </div>

          <!--box3------------------------------------------>
          <div class="movie-box">
          <a href="/play-page-1/A18.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Ready player one</h2></div>
              <div class="low-text">
                  <h2 class="title2">Đấu trường ảo</h2></div>
          </div>

          <!--box4-------------------------------------------->
          <div class="movie-box">
          <a href="/play-page-1/A20.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Ngục Tối và Rồng</h2></div>
              <div class="low-text">
                  <h2 class="title2">Danh dự kẻ trộm</h2></div>
          </div>

          <!--box5-------------------------------------------->
          <div class="movie-box">
          <a href="/play-page-1/A21.html">
              <div class="box-img">
              <img src="https://i.mpcdn.top/poster/cao-gia-gian-ac-va-nhung-cau-chuyen-khac-6230.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">The Big Bad Fox</h2></div>
              <div class="low-text">
                  <h2 class="title2">and Other Tales</h2></div>
          </div>

          <!--box6-------------------------------------------->
          <div class="movie-box">
          <a href="/play-page-1/A22.html">
              <div class="box-img">
              <img src="https://play-lh.googleusercontent.com/mPinn5OgOMiYDLihQpgrYwzDi0Nonqr81EU74_l9aQTxdegGf57Ed07CCG9zse1A6jr9Idb10UB7kAd8I5zg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Resident evil </h2></div>
              <div class="low-text">
                  <h2 class="title2">Death island</h2></div>
              </div>

          <!--box7--------------------------------------------->
          <div class="movie-box">
          <a href="/play-page-1/A10.html">
              <div class="box-img">
              <img src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">The Matrix</h2></div>
              <div class="low-text">
                  <h2 class="title2">Ma Trận</h2></div>
          </div>

          <!--box8--------------------------------------------->
          <div class="movie-box">
                <a href="/play-page-1/A79.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Promare_Key_Visual.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Promare</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Giao Thức Promare</h2></div>
                </div>

              <!--box7--------------------------------------------->
  <div class="movie-box">
      <a href="/play-page-1/A70.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
      </a>
          <div class="box-text">
              <h2 class="title">Witch Craft Works</h2></div>
          <div class="low-text">
              <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
      </div>

      <!--box7--------------------------------------------->
  <div class="movie-box">
      <a href="/play-page-1/A71.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
      </a>
          <div class="box-text">
              <h2 class="title">Burn The Witch</h2></div>
          <div class="low-text">
              <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
      </div>

      
      
      
      
  </div>
  </div>


  <!--Top Phim-------------------------------------------------->
  <topphim-component></topphim-component>

  </div>

  
  </section>
      `;
    }
  } 
customElements.define('newm-component', newm);

/* Void1 --------------------------------------------------------------------------------------------------------------*/
class voidbox extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="void" id="">
               
            <!--Conent Silde----------------------->
            <div class="void-content swiper">
                <div class="swiper-wrapper">
                    
      
                    <!--Phimbox 2------------------>
                    <div class="swiper-slide">
                        <div class="head-box">
                            <a href="#">
                            <img src="https://theotakubox.com/cdn/shop/articles/62a9a34b6abff87c70e77467_shield-hero-season-2-new-visual-scaled-e1644450107151_copy_1_1200x1200.jpg?v=1665934300"
                             alt="" class="img">
                            <div class="box-text">
                                <h2 class="title">Sự Trỗi Dậy Của Anh Hùng Khiên</h2></div>
                                <div class="low-text">
                                    <h2 class="title2">Sắp Có Mùa Mới</h2></div>
                            </a>
                        </div>
                    </div>
      


            </div>      
            </div>
        </section>  
      `;
    }
  } 
customElements.define('voidbox-component', voidbox);

/* Random-1 --------------------------------------------------------------------------------------------------------------*/
class random1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="resultS" id="">
        <!--heading-->    
        <div class="heading">
            <a href="#"><i class='bx bx-dice-6'></i><span>Đề xuất cho bạn</span></a>
            </div>
        
        <!--Random Content----------------------> 
            <div class="result"> 
        
                <div class="random1"></div>
                <div class="random2"></div>
                <div class="random3"></div> 
                <div class="random4"></div>
                <div class="random5"></div>
                <div class="random6"></div>
       
                
            </div>
    </section>
      `;
    }
  } 
customElements.define('random1-component', random1);

/* Phim le --------------------------------------------------------------------------------------------------------------*/
class phimle extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimle" id="">
      <!--Heading-->
      <div class="heading">
          <a href="#"><i class='bx bx-movie-play'></i><span>Phim Lẻ</span></a>
          <a href="/OPT/phimle.html"class="more">Xem thêm</a>
          </div>
          
      
          <!--Phim le le Content---------------------------------->
          <div class="phimle-content swiper">
              <div class="swiper-wrapper">
      
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A2.html">
              <div class="box-img">
              <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_nguoi-nhen-2023.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Spider Man</h2></div>
              <div class="low-text">
                  <h2 class="title2">Across the spider verse</h2></div>
          </div>
      </div>

          <!--box2------------------------------------------>
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A6.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Monsters vs Aliens</h2></div>
              <div class="low-text">
                  <h2 class="title2">(2009)</h2></div>
          </div>
      </div>

          <!--box3-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A25.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Akira</h2></div>
              <div class="low-text">
                  <h2 class="title2">Siêu phẩm Anime</h2></div>
          </div>
      </div>

          <!--box4-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A9.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Knives out</h2></div>
              <div class="low-text">
                  <h2 class="title2">Kẻ đâm lén</h2></div>
          </div>
      </div>

          <!--box5-------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A12.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Angry birds</h2></div>
              <div class="low-text">
                  <h2 class="title2">Những chú chim giận dữ</h2></div>
          </div>
      </div>

          <!--box6--------------------------------------------->
          <div class="swiper-slide">
          <div class="movie-box">
          <a href="/play-page-1/A24.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Mononoke</h2></div>
              <div class="low-text">
                  <h2 class="title2">Công chúa Mononoke</h2></div>
          </div>
      </div>

       <!--box7--------------------------------------------->
       <div class="swiper-slide">
       <div class="movie-box">
          <a href="/play-page-1/A88.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Chicken Run</h2></div>
              <div class="low-text">
                  <h2 class="title2">Phi Đội Gà Bay</h2></div>
          </div>
      </div>

          <!--box8--------------------------------------------->
          <div class="swiper-slide">
      <div class="movie-box">
          <a href="/play-page-1/A89.html">
              <div class="box-img">
              <img src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Porco_Rosso_poster.jpg" alt="" class="img"></div>
          </a>
              <div class="box-text">
                  <h2 class="title">Porco Rosso</h2></div>
              <div class="low-text">
                  <h2 class="title2">Chú Heo Màu Đỏ</h2></div>
          </div>
      </div>

      <!--box8--------------------------------------------->
      <div class="swiper-slide">
          <div class="movie-box">
              <a href="/play-page-1/A32.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg" alt="" class="img"></div>
              </a>
                  <div class="box-text">
                      <h2 class="title">Big Hero 6</h2></div>
                  <div class="low-text">
                      <h2 class="title2">6 Đại Anh Hùng</h2></div>
              </div>
          </div>

          <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A27.html">
                      <div class="box-img">
                      <img src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Super Mario Bros</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Anh em Mario</h2></div>
                  </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A40.html">
                      <div class="box-img">
                      <img src="/img/justice league/doom/1.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Justice League</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Doom</h2></div>
                  </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A19.html">
                      <div class="box-img">
                      <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Vampire Hunter D</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Bloodlust</h2></div>
                  </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A45.html">
                      <div class="box-img">
                      <img src="https://i.pinimg.com/originals/d0/82/84/d08284cf9e6232b9641ac5ee2539e1c7.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Warcraft</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                  </div>
              </div>

              <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A46.html">
                      <div class="box-img">
                      <img src="https://www.themoviedb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Ponyo</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                  </div>
              </div>

                  <!--box8--------------------------------------------->
          <div class="swiper-slide">
              <div class="movie-box">
                  <a href="/play-page-1/A75.html">
                      <div class="box-img">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/f/f2/Ryu_to_Sobakasu_no_Hime_poster.jpg" alt="" class="img"></div>
                  </a>
                      <div class="box-text">
                          <h2 class="title">Belle</h2></div>
                      <div class="low-text">
                          <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
                  </div>
              </div>


      </div>    
      
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      
      
  </section>
      `;
    }
  } 
customElements.define('phimle-component', phimle);

/* Phim le --------------------------------------------------------------------------------------------------------------*/
class phimlephone extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimle2" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-movie-play'></i><span>Phim Lẻ</span></a>
            <a href="/OPT/phimle.html"class="more">Xem thêm</a>
            </div>
            
        
            <!--Phim le le Content---------------------------------->
            <div class="phimle2-content swiper">
                <div class="swiper-wrapper">
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A2.html">
                <div class="box-img">
                <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/r/s/rsz_nguoi-nhen-2023.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Spider Man</h2></div>
                <div class="low-text">
                    <h2 class="title2">Across the spider verse</h2></div>
            </div>
        </div>

            <!--box2------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A6.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Monsters vs Aliens</h2></div>
                <div class="low-text">
                    <h2 class="title2">(2009)</h2></div>
            </div>
        </div>

            <!--box3-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A25.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Akira</h2></div>
                <div class="low-text">
                    <h2 class="title2">Siêu phẩm Anime</h2></div>
            </div>
        </div>

            <!--box4-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A9.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Knives out</h2></div>
                <div class="low-text">
                    <h2 class="title2">Kẻ đâm lén</h2></div>
            </div>
        </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A12.html">
                <div class="box-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Angry birds</h2></div>
                <div class="low-text">
                    <h2 class="title2">Những chú chim giận dữ</h2></div>
            </div>
        </div>

            <!--box6--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A24.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Mononoke</h2></div>
                <div class="low-text">
                    <h2 class="title2">Công chúa Mononoke</h2></div>
            </div>
        </div>

         <!--box7--------------------------------------------->
         <div class="swiper-slide">
         <div class="movie-box">
            <a href="/play-page-1/A88.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Chicken Run</h2></div>
                <div class="low-text">
                    <h2 class="title2">Phi Đội Gà Bay</h2></div>
            </div>
        </div>

            <!--box8--------------------------------------------->
            <div class="swiper-slide">
        <div class="movie-box">
            <a href="/play-page-1/A89.html">
                <div class="box-img">
                <img src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Porco_Rosso_poster.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Porco Rosso</h2></div>
                <div class="low-text">
                    <h2 class="title2">Chú Heo Màu Đỏ</h2></div>
            </div>
        </div>

        <!--box8--------------------------------------------->
        <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A32.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Big Hero 6</h2></div>
                    <div class="low-text">
                        <h2 class="title2">6 Đại Anh Hùng</h2></div>
                </div>
            </div>

            <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A27.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Super Mario Bros</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Anh em Mario</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A40.html">
                        <div class="box-img">
                        <img src="/img/justice league/doom/1.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Justice League</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Doom</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A19.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Vampire Hunter D</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Bloodlust</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A45.html">
                        <div class="box-img">
                        <img src="https://i.pinimg.com/originals/d0/82/84/d08284cf9e6232b9641ac5ee2539e1c7.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Warcraft</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                    </div>
                </div>

                <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A46.html">
                        <div class="box-img">
                        <img src="https://www.themoviedb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Ponyo</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                    </div>
                </div>

                    <!--box8--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A75.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/f2/Ryu_to_Sobakasu_no_Hime_poster.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Belle</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
                    </div>
                </div>


        </div>    
        
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimlephone-component', phimlephone);

/* Phim bo --------------------------------------------------------------------------------------------------------------*/
class phimbo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimbo" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-film'></i><span>Phim Bộ</span></a>
            <a href="/OPT/phimbo/phimbo.html"class="more">Xem thêm</a>
            </div>
        <!--Phim Moi Sub Content---------------------------------->
        
        <div class="phimbo-content swiper">
            
            <div class="swiper-wrapper">
            
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A3.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Mob psycho 100</h2></div>
                <div class="low-text">
                    <h2 class="title2">Cậu bé siêu năng lực</h2></div>
            </div>
        </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gotōbun no Hanayome</h2></div>
                </div>
        </div>


             <!--box7--------------------------------------------->
             <div class="swiper-slide">
             <div class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Chuunibyou Demo</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Koi Ga Shitai!</h2></div>
                </div>
            </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A44.html">
                        <div class="box-img">
                        <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Overlord</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
                    </div>
               </div>

            <!--box3------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A8.html">
                <div class="box-img">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Adventure Time</h2></div>
                <div class="low-text">
                    <h2 class="title2">Giờ phiêu lưu</h2></div>
            </div>
        </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A71.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                </div>
            </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
        <div class="movie-box">
            <a href="/play-page-1/A87.html">
                <div class="box-img">
                <img src="https://ih1.redbubble.net/image.3824876992.2673/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Hensuki</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lọ Lem Quần Lót</h2></div>
            </div>
        </div>
            
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>
            </div>
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A47.html">
                        <div class="box-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Castlevania</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                    </div>
                </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A70.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Witch Craft Works</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                    </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A48.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMDY1ZDkyZTktMGIyMy00OWFlLWE5YzYtYzBjYjQzZGMyZDIxXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Dragon Age</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Absolution</h2></div>
                    </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A57.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/7/79/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Devil May Cry</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
                    </div> 
                </div>
    
       
       
       
        </div>
    
        </div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimbo-component', phimbo);

/* Phim bo --------------------------------------------------------------------------------------------------------------*/
class phimbophone extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="phimbo2" id="">
        <!--Heading-->
        <div class="heading">
            <a href="#"><i class='bx bx-film'></i><span>Phim Bộ</span></a>
            <a href="/OPT/phimbo/phimbo.html"class="more">Xem thêm</a>
            </div>
        <!--Phim Moi Sub Content---------------------------------->
        
        <div class="phimbo2-content swiper">
            
            <div class="swiper-wrapper">
            
        
            <!--box1------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A3.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Mob psycho 100</h2></div>
                <div class="low-text">
                    <h2 class="title2">Cậu bé siêu năng lực</h2></div>
            </div>
        </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Gotōbun no Hanayome</h2></div>
                </div>
        </div>


             <!--box7--------------------------------------------->
             <div class="swiper-slide">
             <div class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Chuunibyou Demo</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Koi Ga Shitai!</h2></div>
                </div>
            </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A44.html">
                        <div class="box-img">
                        <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Overlord</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
                    </div>
               </div>

            <!--box3------------------------------------------>
            <div class="swiper-slide">
            <div class="movie-box">
            <a href="/play-page-1/A8.html">
                <div class="box-img">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Adventure Time</h2></div>
                <div class="low-text">
                    <h2 class="title2">Giờ phiêu lưu</h2></div>
            </div>
        </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A71.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                </div>
            </div>

            <!--box5-------------------------------------------->
            <div class="swiper-slide">
        <div class="movie-box">
            <a href="/play-page-1/A87.html">
                <div class="box-img">
                <img src="https://ih1.redbubble.net/image.3824876992.2673/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Hensuki</h2></div>
                <div class="low-text">
                    <h2 class="title2">Lọ Lem Quần Lót</h2></div>
            </div>
        </div>
            
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
            <div class="movie-box">
                <a href="/play-page-1/A83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>
            </div>
           
            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A47.html">
                        <div class="box-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Castlevania</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                    </div>
                </div>

            <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A70.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Witch Craft Works</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                    </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A48.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMDY1ZDkyZTktMGIyMy00OWFlLWE5YzYtYzBjYjQzZGMyZDIxXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Dragon Age</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Absolution</h2></div>
                    </div>
                </div>

                <!--box7--------------------------------------------->
            <div class="swiper-slide">
                <div class="movie-box">
                    <a href="/play-page-1/A57.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/7/79/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Devil May Cry</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
                    </div> 
                </div>
    
       
       
       
        </div>
    
        </div>
        
        
    </section>
      `;
    }
  } 
customElements.define('phimbophone-component', phimbophone);


/* Void2 --------------------------------------------------------------------------------------------------------------*/
class voidbox2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="void2" id="">
               
            <!--Conent Silde----------------------->
            <div class="void2-content swiper">
                <div class="swiper-wrapper">
                    
      
                    <!--Phimbox 2------------------>
                    <div class="swiper-slide">
                        <div class="head-box">
                            <a href="#">
                            <img src="https://theotakubox.com/cdn/shop/articles/62a9a34b6abff87c70e77467_shield-hero-season-2-new-visual-scaled-e1644450107151_copy_1_1200x1200.jpg?v=1665934300"
                             alt="" class="img">
                            <div class="box-text">
                                <h2 class="title">Sự Trỗi Dậy Của Anh Hùng Khiên</h2></div>
                                <div class="low-text">
                                    <h2 class="title2">Sắp Có Mùa Mới</h2></div>
                            </a>
                        </div>
                    </div>
      


            </div>      
            </div>
        </section>  
      `;
    }
  } 
customElements.define('voidbox2-component', voidbox2);

/* My Footer --------------------------------------------------------------------------------------------------------------*/
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class=footer>
      <a href="/OPT/index.html" class="logo">
      <img src="static/image/taiphim4k.png" class="oppp">
          Phim<span>4K</span>
      </a>
  
  </section>
    `;
  }
}
customElements.define('footer-component', Footer);

/* Top Phim  ---------------------------------------------------------------------------------------------------------*/
class topphim extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="top">
      <div class="heading">
          <span>Top Trending</span>
          </div>


  <div class="top-content">
      
      <!--box3------------------------------------------>
  
  <div class="movie-box">
      <a href="/play-page-1/A2.html">
          <div class="box-img">
          <img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Spider Man</h2>
          
              <h2 class="title2">Across The Spider Verse</h2></div>
          </a>
      </div> 

      <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A1.html"> 
                    <div class="box-img">
                    <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen</h2>
                    
                        <h2 class="title2">Chú Thuật Hồi Chiến</h2></div></a>
                </div>

      <!--box3------------------------------------------>
      <div class="movie-box">
      <a href="/play-page-1/A73.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Howl Moving Castle</h2>
          
              <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div></a>
      </div>

      <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2>
                    
                        <h2 class="title2">Little Witch Academia</h2></div>
                        </a>
                </div>

                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A68.html">
                        <div class="box-img">
                        <img src="https://s198.imacdn.com/ff/2023/09/01/346eda80c0c1c96c_b7a995db50578395_54254169358078523.jpg" alt="" class="img"></div>
                    
                        <div class="box-text">
                            <h2 class="title">Ninja Rùa</h2>
                        
                            <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                            </a>
                    </div> 

      
      
  <div class="gif">

  </div>
      



      
      

    </div>
    </div>
      `;
    }
  }
customElements.define('topphim-component', topphim);

/* Top Phim 2  ---------------------------------------------------------------------------------------------------------*/
class topphim2 extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="relate">
      <div class="heading">
          <span>Trending</span>
      </div>

  <div class="relate-content">
  <!--Season--------------------------------------------------->
  <div class="relate-list">

<!--box3------------------------------------------>
<div class="movie-box">
<a href="/play-page-1/A2.html">
<div class="box-img">
<img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Spider Man</h2>

  <h2 class="title2">Across The Spider Verse</h2></div>
</a>
</div> 
<!--box7--------------------------------------------->
<div class="movie-box">
    <a href="/play-page-1/A1.html"> 
        <div class="box-img">
        <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Jujutsu Kaisen</h2>
        
            <h2 class="title2">Chú Thuật Hồi Chiến</h2></div></a>
</div>

<!--box3------------------------------------------>
<div class="movie-box">
<a href="/play-page-1/A6.html">
<div class="box-img">
<img src="https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Monsters vs Aliens</h2>

  <h2 class="title2">(2009)</h2></div></a>
</div>

<!--box7--------------------------------------------->
<div class="movie-box">
    <a href="/play-page-1/A83.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Học Viện Phù Thủy</h2>
        
            <h2 class="title2">Little Witch Academia</h2></div>
            </a>
</div>

<!--box7--------------------------------------------->
<div class="movie-box">
        <a href="/play-page-1/A68.html">
            <div class="box-img">
            <img src="https://s198.imacdn.com/ff/2023/09/01/346eda80c0c1c96c_b7a995db50578395_54254169358078523.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Ninja Rùa</h2>
            
                <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                </a>
</div> 



  </div>

  <div class="gif2">
      <iframe src="" autoplay="1" loop="true" allow="autoplay" frameborder="1" allowfullscreen></iframe>
    </div>

</div>

  </div>
      `;
    }
  }
customElements.define('topphim2-component', topphim2);

/* Phim le Number --------------------------------------------------------------------------------------------*/
class pnumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
        <!---->
        <div class="pagenumber-content swiper">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                <li><a href="/OPT/phimle/phimle.html">Trang 1</a></li>
                </div>

                <div class="swiper-slide">
                    <li><a href="/OPT/phimle/phimle2.html">Trang 2</a></li>
                    </div>

                <div class="swiper-slide">
                    <li><a href="/OPT/phimle/phimle3.html">Trang 3</a></li>
                    </div>

                
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        </nav>
    `;
  }
}
customElements.define('phimlenumber-component', pnumber);

/* Kho Phim kho Number ------------------------------------------------------------------------------------------------*/
class anumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
                <!---->
                <div class="pagenumber-content swiper">
                    <div class="swiper-wrapper">
        
                        <div class="swiper-slide">
                        <li><a href="/OPT/khophim/khophim.html">Trang 1</a></li>
                        </div>
        
                        <div class="swiper-slide">
                            <li><a href="/OPT/khophim/khphim2.html">Trang 2</a></li>
                            </div>

                            <div class="swiper-slide">
                                <li><a href="/OPT/khophim/khophim3.html">Trang 3</a></li>
                                </div>
        
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </nav>
    `;
  }
}
customElements.define('khophimnumber-component', anumber);

/* Phim Bo Number -------------------------------------------------------------------------------------------------------*/
class xnumber extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="nextpage">
                <!---->
                <div class="pagenumber-content swiper">
                    <div class="swiper-wrapper">
        
                        <div class="swiper-slide">
                        <li><a href="/OPT/phimbo/phimbo.html">Trang 1</a></li>
                        </div>
        
                        <div class="swiper-slide">
                            <li><a href="/OPT/phimbo/phimbo2.html">Trang 2</a></li>
                            </div>

                            <div class="swiper-slide">
                                <li><a href="/OPT/phimbo/phimbo3.html">Trang 3</a></li>
                                </div>
        
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                </nav>
    `;
  }
}
customElements.define('phimbonumber-component', xnumber);

/* active next page */
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nextpage li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

/* Gif jhon Facebook ---------------------------------------------*/
class xgif extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="trailer">
      <iframe src="" autoplay="1" loop="true" allow="autoplay" frameborder="1" allowfullscreen></iframe>
    </div>
      `;
    }
  }
  customElements.define('gif-component', xgif);












/* Jujusu Kaisen Season ----------------*/
class JKSeason extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A59.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWJkN2UzODItMGFjNC00MTZiLThlNWYtODQ5Y2QzNjcyZjg4XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
            
                <h2 class="title2">Movie 0</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A1.html">
            <div class="box-img">
            <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="/play-page-1/A100.html">
                <div class="box-img">
                <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/02/14/6-2314.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 2</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
    `;
  }
}
customElements.define('jkseason-component', JKSeason);


/* Jujusu Kaisen Season Movie ----------------*/
class JK0Season extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">
  
      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="#">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMWJkN2UzODItMGFjNC00MTZiLThlNWYtODQ5Y2QzNjcyZjg4XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
              
                  <h2 class="title2">Movie 0</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
      <li class="movie-box">
          <a href="/play-page-1/A1.html">
              <div class="box-img">
              <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Chú Thuật Hồi Chiến</h2>
              
                  <h2 class="title2">Mùa 1</h2></div>
              </a>
          </li> 
      </div>
  
  
          <!--box2------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
              <a href="/play-page-1/A100.html">
                  <div class="box-img">
                  <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/02/14/6-2314.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Chú Thuật Hồi Chiến</h2>
                  
                      <h2 class="title2">Mùa 2</h2></div>
                  </a>
              </li> 
          </div>
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  }
  customElements.define('jk0season-component', JK0Season);

/* Jujusukaisen s1 video --*/
class JKvideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
    
<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A59.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWJkN2UzODItMGFjNC00MTZiLThlNWYtODQ5Y2QzNjcyZjg4XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
            
                <h2 class="title2">Movie 0</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
    <li class="movie-box">
        <a href="#season1">
            <div class="box-img">
            <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="/play-page-1/A100.html">
                <div class="box-img">
                <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/02/14/6-2314.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 2</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season1">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
            <!--box1------------------------------------------>
            <li class="list-box">
                <a href="/Xemphim/Jujustu Kaisen/s1/e1.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNWEwNWNhODYtOWZhYS00NGMzLWJhZTQtZTVhOGUyMzU3NWFhXkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tập 1</h2></div>
                    </a>
                </li>
        
            <!--box1------------------------------------------>
            <li class="list-box">
                <a href="/Xemphim/Jujustu Kaisen/s1/e2.html">
                    <div class="box-img">
                    <img src="https://otakuorbit.com/wp-content/uploads/2020/10/0_kzlh7D6-IsD3SMCy-1024x576.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tập 2</h2></div>
        
                    </a>
                </li>
        
                <!--box1------------------------------------------>
                <li class="list-box">
                    <a href="/Xemphim/Jujustu Kaisen/s1/e3.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BZjg5MDRhYmMtMGUyMi00ZjBiLThkZjEtYjg3NjQ0YWJmMTMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
                    
                        <div class="box-text">
                            <h2 class="title">Tập 3</h2></div>
                        </a>
                    </li>
        
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e4.html">
                            <div class="box-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RS9gqkpHCVwMOGZLiy6lVEjZ__vLhnEgD1KOL5VQm8bb9ss2n2Y-tQC3AONfbd1U_UM&usqp=CAU" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 4</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e5.html">
                            <div class="box-img">
                            <img src="https://otakuorbit.com/wp-content/uploads/2020/11/Jujutsu-Kaisen-05.mkv0055-1024x576.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 5</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e6.html">
                            <div class="box-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1Njf3j23G_hazG1CLJ4alZItfqH69EIjB1ezFnKOnBCJiBRbere7PdKYKbLu8oU1HFU&usqp=CAU" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 6</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e7.html">
                            <div class="box-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeXO8aF68zU_FUnH1_atPElCwGakmxlmngByX9N7zn2-lVcS9eI8DGsbpfw-HU91r92s&usqp=CAU" alt="" class="img"></div>
                     
                            <div class="box-text">
                                <h2 class="title">Tập 7</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e8.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BMDY3MzExZmUtOWJiMy00MTY2LWExYWUtNDhhNzdkNmQ1NjNmXkEyXkFqcGdeQXVyMTA2MDk1OTE4._V1_.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 8</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e9.html">
                            <div class="box-img">
                            <img src="https://flxt.tmsimg.comstatics/p19249972_e_h8_aa.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 9</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e10.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjMwYWViZTgtNThhMi00NDBhLWJkZjAtMDFiYmU0MzRmYTMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 10</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e11.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BNDRiNzFlNTAtNTlhMi00ZWRkLTkwMGItM2ZlZjlmYTRkZDY3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 11</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e12.html">
                            <div class="box-img">
                            <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/05/FireShot-Webpage-Screenshot-1017-Netflix-www.netflix.com_.png?ssl=1" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 12</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e13.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BNGE4N2Y2Y2EtODFmMC00YjIwLTg5ZTktODU2ZThjYWNkOTM1XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 13</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e14.html">
                            <div class="box-img">
                            <img src="https://i0.wp.com/otakuorbit.com/wp-content/uploads/2021/01/Kyoto_Jujutsu_Students_Anime.png?ssl=1" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 14</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e15.html">
                            <div class="box-img">
                            <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/72d50608-c82e-4570-80a2-d9672d1515bf.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 15</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e16.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BNzg0YjE3ZWQtMGQ1OS00ZTIyLTk4ZTgtY2U0NjA4YTY5MWIyXkEyXkFqcGdeQXVyODg2Mjc5MjA@._V1_.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 16</h2></div>
                            </a>
                        </li>
        
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e17.html">
                            <div class="box-img">
                            <img src="https://qph.cf2.quoracdn.net/main-qimg-91408aacfd944691df9e91c8b68bad2f-lq" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 17</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e18.html">
                            <div class="box-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhk8F8NhY486Y4na16I7xVe3axynnTgZ1MpjSnbhrgqi5WZPAOKPZxNNjlqFb73c4IItg&usqp=CAU" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 18</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e19.html">
                            <div class="box-img">
                            <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/9795054f-1d3e-4f86-83ac-c16cd38a535f.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 19</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e20.html">
                            <div class="box-img">
                            <img src="https://i0.wp.com/butwhytho.net/wp-content/uploads/2021/02/Use-this-to-resize-images-87.jpg?fit=810%2C450&ssl=1" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 20</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e21.html">
                            <div class="box-img">
                            <img src="https://i0.wp.com/butwhytho.net/wp-content/uploads/2021/03/Use-this-to-resize-images-77.jpg?fit=810%2C450&ssl=1" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 21</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e22.html">
                            <div class="box-img">
                            <img src="https://animeshelter.com/wp-content/uploads/2021/03/jujutsu-kaisen-episode-22-1101.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 22</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e23.html">
                            <div class="box-img">
                            <img src="https://pictures.betaseries.com/banners/episodes/24409/619f1ec190020fa537a38fcb82e10c33.jpg" alt="" class="img"></div>
                       
                            <div class="box-text">
                                <h2 class="title">Tập 23</h2></div>
                            </a>
                        </li>
            
                    <!--box1------------------------------------------>
                    <li class="list-box">
                        <a href="/Xemphim/Jujustu Kaisen/s1/e24.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjZkZWQxY2EtNzc3Ny00ZGY5LTg2ZmYtYzgzMDYyNjRiYjA1XkEyXkFqcGdeQXVyODg2Mjc5MjA@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Tập 24</h2></div>
                            </a>
                        </li>
        
            </div>
            </div>
           



</section>  
      

    `;
  }
}
customElements.define('jkvideo-component', JKvideo);

/* Jujusukaisen s2 video --*/
class JKvideo2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
    
<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A59.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWJkN2UzODItMGFjNC00MTZiLThlNWYtODQ5Y2QzNjcyZjg4XkEyXkFqcGdeQXVyNTg5NjcwNjY@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến 0</h2>
            
                <h2 class="title2">Movie 0</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A1.html">
            <div class="box-img">
            <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Chú Thuật Hồi Chiến</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="#season2">
                <div class="box-img">
                <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/02/14/6-2314.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Chú Thuật Hồi Chiến</h2>
                
                    <h2 class="title2">Mùa 2</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season2">
      <div class="heading">
          <span>Danh sách tập</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
            <!--box1------------------------------------------>
            <li class="list-box">
                <a href="/Xemphim/Jujustu Kaisen/s2/1.html">
                    <div class="box-img">
                    <img src="https://sportshub.cbsistatic.com/i/2023/07/06/b2950613-cafc-48bd-9f43-8eefdc93a4ed/jujutsu-kaisen.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tập 1</h2></div>
                    </a>
                </li>
        
            <!--box1------------------------------------------>
            <li class="list-box">
                <a href="/Xemphim/Jujustu Kaisen/s2/2.html">
                    <div class="box-img">
                    <img src="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/jjk-s2-ep-2.png" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tập 2</h2></div>
        
                    </a>
                </li>

              <!--box1------------------------------------------>
              <li class="list-box">
                  <a href="/Xemphim/Jujustu Kaisen/s2/3.html">
                      <div class="box-img">
                      <img src="https://i.ytimg.com/vi/txjckUe2XEg/maxresdefault.jpg" alt="" class="img"></div>
                  
                    <div class="box-text">
                        <h2 class="title">Tập 3</h2></div>
            
                    </a>
                </li>

                <!--box1------------------------------------------>
                <li class="list-box">
                    <a href="/Xemphim/Jujustu Kaisen/s2/4.html">
                        <div class="box-img">
                        <img src="https://staticg.sportskeeda.com/editor/2023/07/92972-16906572044350-1920.jpg" alt="" class="img"></div>
                    
                      <div class="box-text">
                          <h2 class="title">Tập 4</h2></div>
              
                      </a>
                  </li>

                 <!--box1------------------------------------------>
                <li class="list-box">
                    <a href="/Xemphim/Jujustu Kaisen/s2/5.html">
                        <div class="box-img">
                        <img src="https://i.ytimg.com/vi/Vu-KwHxpmJo/maxresdefault.jpg" alt="" class="img"></div>
                    <div class="box-text">
                 <h2 class="title">Tập 5</h2></div>
                
                        </a>
                    </li>

                 <!--box1------------------------------------------>
                  <li class="list-box">
                    <a href="/Xemphim/Jujustu Kaisen/s2/6.html">
                      <div class="box-img">
                      <img src="https://animehunch.com/wp-content/uploads/2023/08/jjk-s2-ep-6-preview-images8.jpg" alt="" class="img"></div>
                    
                    <div class="box-text">
                     <h2 class="title">Tập 6</h2></div>
                    
                            </a>
                        </li>
     


            </div>
            </div>
    </section>
      
    `;
  }
}
customElements.define('jkvideo2-component', JKvideo2);







/* Spiderman relate --------------------------------------------------------------------------------------------------------------*/
class spiderrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="/play-page-1/A17.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="/play-page-1/A2.html">
          <div class="box-img">
          <img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidermanrelate-component', spiderrelate);

/* Spiderman video2 ------*/
class spidervideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="/play-page-1/A17.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="#">
          <div class="box-img">
          <img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidervideo2-component', spidervideo2);

/* Spiderman video1 ------*/
class spidervideo1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="#">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Spider Man</h2>
              
                  <h2 class="title2">Into The Spider Verse</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="/play-page-1/A2.html">
          <div class="box-img">
          <img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>

      <div class="box-text">
      <h2 class="title">Spider Man</h2>
      <h2 class="title2">Across The Spider Verse</h2></div>
      </a>
      </li> 
      </div>
  
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('spidervideo1-component', spidervideo1);














/* Mob Psycho 100 Season --------------------------------------------------------------------------------------------------------------*/
class mobrelate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A3.html">
            <div class="box-img">
            <img src="/img/mob100/2.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="/play-page-1/A101.html">
            <div class="box-img">
            <img src="https://cdn-amz.woka.io/images/I/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="/play-page-1/A102.html">
                <div class="box-img">
                <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/10/20074532/Mob-100-1-game4v-1634690731-11.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
    `;
  }
} 
customElements.define('mobseason-component', mobrelate);


/* Mob 1000 s1 video --*/
class mobvideo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="#season1">
            <div class="box-img">
            <img src="/img/mob100/2.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="/play-page-1/A101.html">
            <div class="box-img">
            <img src="https://cdn-amz.woka.io/images/I/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="/play-page-1/A102.html">
                <div class="box-img">
                <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/10/20074532/Mob-100-1-game4v-1634690731-11.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>
        
        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season1">
      <div class="heading">
          <span>Danh sách tập Mùa 1</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/1.html">

            <div class="box-img">
            <img src="https://img1.ak.crunchyroll.com/i/spire2-tmb/ecd47b8e3e21518feb62501131ec334d1468260589_full.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/2.html">
            
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZmFlNjcxMmMtNmY0OC00NmNhLWJlYjUtNmM3ZGYxNGFiNjU0XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/3.html">
            
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTU5OTAxNTMtNDU2Ny00MWYxLWJhZTItYWVmOWYyZWI2NzQ2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/4.html">
            <div class="box-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwp_aI2OmTKdRA0Mgejo4FOIzzQYElQvzbKA&usqp=CAU" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/5.html">
            <div class="box-img">
            <img src="https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAmNzRKtPPU2CL2FODrmc3YUAUqvLOEnjbnDWlzgkQC9B" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/6.html">
            <div class="box-img">
            <img src="https://anime.atsit.in/l/wp-content/uploads/2022/11/anh-chup-man-hinh-mob-psycho-100-season-3-episode-6-tom-tat-cau-chuyen-goi-y-rang-ke-thu-thuc-su-khong-phai-la-ekubo.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/7.html">
            <div class="box-img">
            <img src="https://cfm.yidio.com/images/tv/45577/1199931/episode-image-400x225.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/8.html">
            <div class="box-img">
            <img src="https://pictures.betaseries.com/banners/episodes/13124/fce58d94992c2efe760e72c2df760b88.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/9.html">
            <div class="box-img">
            <img src="https://img1.ak.crunchyroll.com/i/spire4-tmb/a1cde9bae8898b6075ab0bbb975064c31546473316_full.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/10.html">
            <div class="box-img">
            <img src="https://i0.wp.com/wrongeverytime.com/wp-content/uploads/2016/09/MobPsycho3.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/11.html">
            <div class="box-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwJvKNFYjbNNhoXQH1_csS-SgmuW8sRFxCA&usqp=CAU" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/mob100/s1/12.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/cbJ5g2ymnIY/maxresdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>
        
            </div>
            </div>
           

    </section>
  
    `;
  }
}
customElements.define('mobvideo-component', mobvideo);


/* Mob 1000 s2 video --*/
class mobvideo2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A3.html">
            <div class="box-img">
            <img src="/img/mob100/2.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 1</h2></div>
            </a>
        </li> 
    </div>

        <!--box1------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
        <a href="#season2">
            <div class="box-img">
            <img src="https://cdn-amz.woka.io/images/I/616-6TNyRmL.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
            
                <h2 class="title2">Mùa 2</h2></div>
            </a>
        </li> 
    </div>


        <!--box2------------------------------------------>
        <div class="swiper-slide">
        <li class="movie-box">
            <a href="/play-page-1/A102.html">
                <div class="box-img">
                <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/10/20074532/Mob-100-1-game4v-1634690731-11.jpg" alt="" class="img"></div>
            
                <div class="box-text">
                    <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                
                    <h2 class="title2">Mùa 3</h2></div>
                </a>
            </li> 
        </div>


    </div>
    <div class="swiper-scrollbar"></div>
</div>
        
    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="season2">
      <div class="heading">
          <span>Danh sách tập Mùa 2</span>
      </div>
    <!--list tap Content---------------------------------->
    <div class="list-content">
        
    <!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/1.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BMjg4M2I0ZmUtY2ViMi00ZmNkLWExYmItZDJjN2JiM2U5OWVhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 1</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/2.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BMTMwYjVkNjQtMGU4Ny00ZThkLWIxMTUtMDMwZDkxOGZiZDgwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 2</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/3.html">
        <div class="box-img">
        <img src="https://wooderon.files.wordpress.com/2019/01/mob-psycho-100-episode-3-2-e1548332700792.png?w=863" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 3</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/4.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BOGU2ZGJmNWYtNGFjOS00NzI5LTg3NDgtODY2ZjBiYTliN2VhXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 4</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/5.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BMTdlNGMzNTMtMjAyMS00MGZmLWE0MTEtNGMxN2U5YmQ3ZDU0XkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_.jpg" alt="" class="img"></div>
   
        <div class="box-text">
            <h2 class="title">Tập 5</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/6.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BNDYxMTg0MDUtOTgyZi00NzViLWI2OTctMzJjNTIyNjJiNjU0XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 6</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/7.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BM2ZlMjAyZDAtZWZkZi00ZjUwLWI3NWEtODRjYzEzNDdlOTcyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 7</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/8.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BYWUwNjI0NzEtMDExNC00YjE1LWFlNDMtMzJmY2VjYTAwOWM0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
   
        <div class="box-text">
            <h2 class="title">Tập 8</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/9.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BNzQ2ZTZiNjktOWFlNS00OGYxLTg2NGItZmE1NTRhZGFlYmY5XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 9</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/10.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BODA0ZmNlYWQtNDc5Ni00YmVmLTgwMGMtMDcwNTQxZDRlYWMwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 10</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/11.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BMTJmOGZhZGEtNTliZS00MTZjLTkzZWUtNjhmNzBhZTU0YTgwXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 11</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/12.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BMTdmMTYxMzYtYTk0MS00YTIzLTgyYTktZDg3ODNlNmM3NWFmXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 12</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/13.html">
        <div class="box-img">
        <img src="https://m.media-amazon.com/images/M/MV5BZTBlZjEwN2ItYTkzOC00NDNiLTk1MGMtYzdhODBjZmU3ZjRhXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Tập 13</h2></div>
        </a>
    </li>

<!--box1------------------------------------------>
<li class="list-box">
    <a href="/Xemphim/mob100/s2/14.html">
        <div class="box-img">
        <img src="https://www.gamespot.com/a/uploads/original/1587/15875866/3554416-dupe.png" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Special</h2></div>
        </a>
    </li>
        
            </div>
            </div>
           

    </section>
  
      
    `;
  }
}
customElements.define('mobvideo2-component', mobvideo2);

/* Mob 1000 s3 video --*/
class mobvideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
          <a href="/play-page-1/A3.html">
              <div class="box-img">
              <img src="/img/mob100/2.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
              
                  <h2 class="title2">Mùa 1</h2></div>
              </a>
          </li> 
      </div>
  
          <!--box1------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
          <a href="/play-page-1/A101.html">
              <div class="box-img">
              <img src="https://cdn-amz.woka.io/images/I/616-6TNyRmL.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
              
                  <h2 class="title2">Mùa 2</h2></div>
              </a>
          </li> 
      </div>
  
  
          <!--box2------------------------------------------>
          <div class="swiper-slide">
          <li class="movie-box">
              <a href="#season3">
                  <div class="box-img">
                  <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/10/20074532/Mob-100-1-game4v-1634690731-11.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Cậu Bé Siêu Năng Lực</h2>
                  
                      <h2 class="title2">Mùa 3</h2></div>
                  </a>
              </li> 
          </div>
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season3">
        <div class="heading">
            <span>Danh sách tập Mùa 3</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/1.html">
  
              <div class="box-img">
              <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/10/mob-psycho-100-iii-feature.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/2.html">
              
              <div class="box-img">
              <img src="https://thecinemaholic.com/wp-content/uploads/2022/10/2xzbassag.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/3.html">
              
              <div class="box-img">
              <img src="https://anime.atsit.in/l/wp-content/uploads/2022/10/mob-psycho-100-season-3-episode-3-tiet-lo-tom-tat-cau-chuyen-anh-chup-man-hinh-treu-choc-mob-tro-thanh-mot-nha-lanh-dao-giao-phai.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/4.html">
              <div class="box-img">
              <img src="https://staticg.sportskeeda.com/editor/2022/10/70c3a-16668107194234-1920.jpg?w=840" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/5.html">
              <div class="box-img">
              <img src="https://sportshub.cbsistatic.com/i/2022/11/02/85a36f76-adec-447d-bed2-5421ddf003cf/mob-psycho-100.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/6.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2022/11/Screenshot-7129.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/7.html">
              <div class="box-img">
              <img src="https://editors.dexerto.com/wp-content/uploads/2022/11/16/Mobgoesonroadtrip-e1668623647573.jpg" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/8.html">
              <div class="box-img">
              <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/11/23/mob-3-ep8-2.jpg" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/9.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDyiq0hM2HTwY-baOYr1s4fZSmLFbecryCqrxrrmCFsG5kPvIhvyOvQxINgH1uXAI4ks&usqp=CAU" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/10.html">
              <div class="box-img">
              <img src="https://thecinemaholic.com/wp-content/uploads/2022/12/Mob-Psycho-100-III-10-C-1024x576-1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/11.html">
              <div class="box-img">
              <img src="https://theenvoyweb.com/wp-content/uploads/2022/12/Mob-Psycho-100-season-3-episode-11.jpg" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/mob100/s3/12.html">
              <div class="box-img">
              <img src="https://staticg.sportskeeda.com/editor/2022/12/43340-16716512333604.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('mobvideo3-component', mobvideo3);


/* One Punch Man Season --------------------------------------------------------------------------------------------------------------*/
class onepunchSeason extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="season">
                <h2 class="title">
                    <i class='bx bx-list-ul'></i><span>Mùa</span>
                <!--CCCC-->
                    <div class="season-list">
                        <div class="swiper-wrapper">
                            
                            <div class="swiper-slide">
                            <li><a href="/Xemphim/onepunchman/s1/1.html">Season 1</a></li></div>

                            <div class="swiper-slide">
                                <li><a href="/Xemphim/onepunchman/s2/1.html">Season 2</a></li></div>     
                    
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    </div>
                </h2>

            </section>
    `;
  }
} 
customElements.define('onepunchseason-component', onepunchSeason);





/* Puss IN Boot Relate --------------------------------------------------------------------------------------------------------------*/
class pussrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/play-page-1/A5.html">
            <div class="box-img">
            <img src="https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-products-digital.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Mèo Đi Hia</h2>
            
                <h2 class="title2">Điều ước cuối cùng</h2></div>
            </a>
        </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
 
      `;
    }
  } 
customElements.define('pussseason-component', pussrelate);


/* Puss IN Boot Relate --------------------------------------------------------------------------------------------------------------*/
class pussvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      

    <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    
    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
        <a href="/Xemphim/pussinboot/2.html">
            <div class="box-img">
            <img src="https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-products-digital.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Mèo Đi Hia</h2>
            
                <h2 class="title2">Điều ước cuối cùng</h2></div>
            </a>
        </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
 
      `;
    }
  } 
customElements.define('pussvideo-component', pussvideo);



  /* KungFU Panda Relate --------------------------------------------------------------------------------------------------------------*/
class kungfurelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="/play-page-1/A7.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Kung_fu_panda_poster.jpg/220px-Kung_fu_panda_poster.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda</h2>
          
              <h2 class="title2">Phần 1</h2></div>
              </a>
      </li>
    </div>


    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="/play-page-1/A60.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda 2</h2>
          
              <h2 class="title2">Phần 2</h2></div>
              </a>
      </li>
    </div>

    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
                <a href="/play-page-1/A61.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Kung Fu Panda 3</h2>
                    
                        <h2 class="title2">Phần 3</h2></div>
                        </a>
                </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
      `;
    }
  } 
  customElements.define('kungfu-component', kungfurelate);


 /* KungFU Panda Relate ----------------------------------*/
 class kungfuvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="/Xemphim/kungfupanda/p1.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Kung_fu_panda_poster.jpg/220px-Kung_fu_panda_poster.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda</h2>
          
              <h2 class="title2">Phần 1</h2></div>
              </a>
      </li>
    </div>


    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
      <a href="/Xemphim/kungfupanda/p2.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Kung Fu Panda 2</h2>
          
              <h2 class="title2">Phần 2</h2></div>
              </a>
      </li>
    </div>

    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <li class="movie-box">
                <a href="/Xemphim/kungfupanda/p3.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Kung Fu Panda 3</h2>
                    
                        <h2 class="title2">Phần 3</h2></div>
                        </a>
                </li> 
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>


  </section>
      `;
    }
  } 
  customElements.define('kungfuvideo-component', kungfuvideo);




 /* Angry Relate --------------------------------------------------------------------------------------------------------------*/
 class angryrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="/play-page-1/A12.html">
<div class="box-img">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds</h2>

  <h2 class="title2">Phần 1</h2></div>
</a>
</li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="/play-page-1/A62.html">
<div class="box-img">
<img src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_the-angry-birds-movie-2_poster_2.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds 2</h2>

  <h2 class="title2">Phần 2</h2></div>
</a>
</li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('angry-component', angryrelate);

  /* angryvideo play --------------------------------------------------------------------------------------------------------------*/
class angryvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="/Xemphim/angrybird/p1.html">
<div class="box-img">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds</h2>

  <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
</a>
</li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
<a href="/Xemphim/angrybird/p2.html">
<div class="box-img">
<img src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_the-angry-birds-movie-2_poster_2.jpg" alt="" class="img"></div>

<div class="box-text">
  <h2 class="title">Angry Birds 2</h2>

  <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
</a>
</li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('angryvideo-component', angryvideo);



 /* ADvernture Relate --------------------------------------------------------------------------------------------------------------*/
 class adventurerelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A8.html">
          <div class="box-img">
          <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
      
          <div class="box-text">
          <h2 class="title">Adventure Time Season1</h2>
          
              <h2 class="title2">Mùa 1</h2></div>
              </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('adventure-component', adventurerelate);

  /* Adventure SS1 video --*/
class advideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="#">
          <div class="box-img">
          <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
      
          <div class="box-text">
          <h2 class="title">Adventure Time Season1</h2>
          
              <h2 class="title2">Mùa 1</h2></div>
              </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 1</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
      <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/1.html">
            <div class="box-img">
            <img src="https://external-preview.redd.it/ZFN7avGlapRB73VDSUS8pPrkoDTs9MS8Xjr9yisz_yo.jpg?auto=webp&s=68dc9efbcfc3253826657d5eb69f5eca1f7301a0" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/2.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMGU5ZmMzYWMtODc0MC00ZjVhLWJjY2EtMTRiY2Y4OGMzNjFjXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/3.html">
            <div class="box-img">
            <img src="https://pictures.betaseries.com/banners/episodes/152831/2043151.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/4.html">
            <div class="box-img">
            <img src="https://img.over-blog-kiwi.com/2/08/23/64/20160925/ob_727602_la-trompe.png" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/5.html">
            <div class="box-img">
            <img src="https://static.tvmaze.com/uploads/images/original_untouched/139/348254.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/6.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMzk4OGM1ZjEtYThhNS00MGI3LWIzOGEtMTA3NWUxZjliMmNiXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/7.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNGIxZWUzYTEtMzQzNS00MGEzLWIwYzctYjUwOTMyMTdhNDBjXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/8.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYzU2NWJiMzQtNDk0ZC00MDU0LWE4ZGMtY2E3M2I2M2E1ZWE0XkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/9.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZjc3NWJlOGYtNzVkMS00MGM1LTlmOTYtMDc5YzM2Y2I4MTJmXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/10.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNTI2NTYxMWYtNzBmOC00MjlkLWI3ZjQtZTM3MWFiNmFmOTNhXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/11.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWU3NTdhM2MtYmRhYy00N2M0LTkxYjItZWNjMDlkMjY2NmE2XkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/12.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYWY3YzQ2ZDktMWJiMS00MDAyLWIyYmQtMmMyOWJmNjE2ZTEwXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/13.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BODM4NjIxYjItNzM4Mi00OWQxLThlMTYtYzQ4NTQ1ZGI0N2Q5XkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 13</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/14.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzQyYmYzM2MtODcxZi00NmU2LThhNzAtYzVhYTc3MDllZWZjXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 14</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/15.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNTBmYjc1ZDMtZDlhMC00YmI0LThkN2YtN2Q3YjVmOWJlMmI4XkEyXkFqcGdeQXVyMzE5MDUxODM@._V1_.jpg"
            alt="" class="img"></div>
            <div class="box-text">
                <h2 class="title">Tập 15</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/16.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTM1Y2E2YWQtYmMwYi00ZDIyLWI1NmYtYTg5ZDU0YjZiMDE3XkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 16</h2></div>
            </a>
            </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/17.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYjNlMGRhZTUtNTE4OC00N2Y2LTg3MDktODdmMGRmNGM2ZTE0XkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 17</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/18.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMjA4MzY3MTMtZDYzNy00ZjVhLWI5OWUtY2U4ZDM0OGUxOTY1XkEyXkFqcGdeQXVyMTE3MjAyODEz._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 18</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/19.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BOTgyYTViNWEtMTlkNy00NTM5LTgwYjYtZTJiYzQ3YjBmYmQxXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 19</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/20.html">
            <div class="box-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IRzbh4YCyMmAR2d5H3DBsoRwWOiAAVYS3A&usqp=CAU" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 20</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/21.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYjA4ZWQ4MDEtMGY2Ni00NGNiLTgyMjEtMGM4NGMwNmZmYWQ5XkEyXkFqcGdeQXVyNDI4ODg5NzU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 21</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/22.html">
            <div class="box-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXVIV_tBMEJ06_m-u_W8_7G2KRpf_OySTmA&usqp=CAU" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 22</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/23.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNWI4ZTdhZGYtOGQ3NS00MTEyLTgyZGQtZjUxZTdmZTI2MGRjXkEyXkFqcGdeQXVyMzE5MDUxODM@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 23</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/24.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMDJhMTk2NTEtNmI3NC00OWVjLTg1MTMtNTRmMmUxZTdkZDhiXkEyXkFqcGdeQXVyMzE5MDUxODM@._V1_.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 24</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/25.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZWU5NjUyYWMtYzEwOS00ZmE0LTkyYzUtZTllMjRkZjFkMzgzXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 25</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/adventuretime/s1/26.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYzg1NjdiNDktYTE0Zi00ZGRmLWE1NzktNTMzODg3NGQxOTViXkEyXkFqcGdeQXVyNDY5MzYwOTg@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 26</h2></div>
            </a>
        </li>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('advideo-component', advideo);




 /* Kinout Relate --------------------------------------------------------------------------------------------------------------*/
 class kinoutrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A9.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Knives out</h2>
                    
                        <h2 class="title2">Kẻ Đâm Lén</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kinoutrelate-component', kinoutrelate);

 /* Kinout Video --------------------------------------------------------------------------------------------------------------*/
 class kinoutvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/Xemphim/knivesout1/p1.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Knives out</h2>
                    
                        <h2 class="title2">Kẻ Đâm Lén</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('kinoutvideo-component', kinoutvideo);





  /* Ma Trận Relate --------------------------------------------------------------------------------------------------------------*/
 class matixrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A10.html">
                    <div class="box-img">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2>
                        <h2 class="title2">Ma Trận</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('matixrelate-component', matixrelate);

/* Ma Trận Relate --------------------------------------------------------------------------------------------------------------*/
class matixvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/Xemphim/the matrix/1.html">
                    <div class="box-img">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2>
                        <h2 class="title2">Ma Trận</h2></div>
                        </a>
      </li>
      </div>
  
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
  customElements.define('matixvideo-component', matixvideo);




  /* Gravityfall Relate --------------------------------------------------------------------------------------------------------------*/
 class gravityfrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A11.html">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
        <a href="/Xemphim/gravityfall/s2/1.html">
            <div class="box-img">
            <img src="https://flxt.tmsimg.comstatics/p10851882_i_v9_aa.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('gravityfrelate-component', gravityfrelate);

 /* Gravity Fall 1 video --*/
 class gravityfvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <li class="movie-box">
        <a href="/Xemphim/gravityfall/s2/1.html">
            <div class="box-img">
            <img src="https://flxt.tmsimg.comstatics/p10851882_i_v9_aa.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 1</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
      <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/1.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYzA2NzQwNWQtMzdkOC00NDc4LTk5ZjItMzIyNDI5YzEwYWM3XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/2.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzUwMTE1MTItOGVjZC00OGI2LWI4NDItNTU4NjczYWY2NGM3XkEyXkFqcGdeQXVyNjg2MDUzOTM@._V1_.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/3.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMmViMDBjNGEtZmNlOC00MDI4LTg4YjAtZTE1Y2RjYjQwZDE3XkEyXkFqcGdeQXVyNjg2MDUzOTM@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/4.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzhiY2M3MDUtYTQ3MS00Y2RkLTgxMjktMmRhZjQ4ODk3Yzk1XkEyXkFqcGdeQXVyNjg2MDUzOTM@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/5.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzU0ZDZjNjYtZjk4Yi00MDE1LWI1YWEtNjI4OTZmNWViNjJmXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/6.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTgwMjFkZDktOWE1Mi00ZGM1LTg0MjItZTc0ZjkxODJhNjZlXkEyXkFqcGdeQXVyNjg2MDUzOTM@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/7.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZjRhZTVlYmMtNjVmNC00M2UxLTljYTUtY2Q2ZDBiMTNmZTY1XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/8.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BOTllZWYyYWEtODBmOC00ZDQ0LTg5YjQtOWU0MTUzYmQxOGM5XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/9.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTg2MDU1MDUyMF5BMl5BanBnXkFtZTgwMzE1MjU2MjE@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/10.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDg4OGEzNDUtMWFhZS00NDNhLWIyOTYtNDZhM2E0MzFmODViXkEyXkFqcGdeQXVyMjIzODE1MTA@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/11.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMDljNzdkZTgtMTRmZS00OTNlLThkN2MtOTJmYzlhOGRhMTI5XkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/12.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYTc0NmI0YjAtZjRkMi00YmE3LThhZGYtZTlmYjE3ZGM4NGVjXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/13.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNWY0M2NlMzgtNjY4ZC00Mzg2LWE1MzgtMmE0NGMwM2VlMWMzXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 13</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/14.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMmYyNDYzZjEtZTIyNS00Y2RlLTk3ZTQtYjliODI3NjQxNTY5XkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 14</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/15.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWE2ZTBmYTUtZGU4Mi00NjdlLWJlOGMtZjQ0YmFjNTdhNDJmXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
          
            <div class="box-text">
                <h2 class="title">Tập 15</h2></div>
            </a>  
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/16.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BYTQyMTE3ZDEtYTdhOS00MmNjLThlZGYtOTIyZTZiNDFkYzI0XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 16</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/17.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDg2ZTdiNWItZDY4OC00ODk1LTkzOTUtNDhlYmIyMjhkY2M4XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 17</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/18.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZWM4ZTVkZDctNmM5Zi00YmFkLTk1MjctOTM0MmU2ZGQ1OThiXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 18</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/19.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMmFlZTUyNjItYTZhNC00OThjLWJlODAtMGQ1YjA1YWY3MWIwXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 19</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s1/20.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDA0ZmEyMTMtN2YzNS00ZTE0LWI1YzctZWMyYWVmM2Y4Y2E0XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 20</h2></div>
            </a>
        </li>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('gravityfvideo-component', gravityfvideo);

/* Gravity Fall 2 video --*/
class gravityfvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A11.html">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2>
                
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>
  
      <!--box1------------------------------------------>
      <li class="movie-box">
        <a href="#">
            <div class="box-img">
            <img src="https://flxt.tmsimg.comstatics/p10851882_i_v9_aa.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Gravity Fall</h2>
        
                <h2 class="title2">Mùa 2</h2></div>
                </a>
        </li>
     
      </div>
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập Mùa 2</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
          
      <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/1.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNWYzNGQ5YmItMTYzZi00N2Q4LThkM2EtNzdmMjRlYTZiNTZkXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
            </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/2.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzZkMWQzZWEtMDA0MC00ZGFiLTk4MDItYjBkMjhlMjg3MzllXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/3.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZGNmNWVlOTUtOWE1Ny00ZTQ2LWEyMjMtNzY4NjQ5ZjgyMWNlXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/4.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMTUzZmU0NzgtMzY4ZS00ZGMxLWIzNzAtNzJlY2Y2ZjgzOGRhXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/5.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZTFiNDAyMzgtNjAzZi00MWY5LThmYWMtMWYxMTQ3YzA1M2Q5XkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/6.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BY2U1Y2VlOWMtMTA4ZS00MDliLWE4YTctNmQzMTQwMmRhZWNjXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/7.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZjdmOWMyMmItNzJhMC00NTIxLWJiMTMtZDQyYzJhZGY1YzBkXkEyXkFqcGdeQXVyNjg3MTUwMTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/8.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNzgxNWVhNzktZjdiMC00MTk1LTliNWYtMzVmY2VkNTNiOWQyXkEyXkFqcGdeQXVyNzkyODM4NDI@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/9.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BOWMyOWEyNmMtNWY4MC00MjhmLThlZGUtZjkxZGMzNjIxMDk4XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/10.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDkyN2RhNTItMzhhOS00YWZmLWJlOTgtN2NkZWYzZDc0MmIwXkEyXkFqcGdeQXVyNTk3MjY3NDQ@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/11.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BODUzMGY3OGQtOTBiOS00YjQzLWI3MzUtNWRlYmRhOTY3OWI4XkEyXkFqcGdeQXVyMTU0MTM5NTI0._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/12.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDUxZjcwNDUtNjA3ZS00YzU0LTkyOTItN2Y4ZDVhYjBkNDUyXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/13.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMzQ4NDI5YWEtYzY4Mi00OGQwLWJhMGQtNGI5OTJhYmI4MGU5XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 13</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/14.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BZDFkN2RlNGEtYTE0Yi00MWQwLTg2N2YtN2MyZTliZGZmNDRkXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 14</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/15.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMWNlMDdkNmItYWIzYy00MWVkLWJmZDAtMmEyYzE2N2JmMDE2XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
           
            <div class="box-text">
                <h2 class="title">Tập 15</h2></div>
            </a> 
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/16.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BMGE3ZWZmZjUtMDQwZi00MDNkLWI3YjktMmJmNWIwODY5MzFjXkEyXkFqcGdeQXVyNzc2ODA0MzE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 16</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/17.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNjFlZDIzMDEtMTVlMy00YThmLWIxMzYtNzIyMDUwODA5MzE3XkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 17</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/18.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNmFhY2QyOTItZjBhZS00ZjlmLWFkZTAtMTc4MjgxNTQ4YjE1XkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 18</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/19.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BODczMjZmYjQtODZmNS00MzJlLWJjOGQtMTMyZmYyY2MyMjYyXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 19</h2></div>
            </a>
        </li>

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/gravityfall/s2/20.html">
            <div class="box-img">
            <img src="https://m.media-amazon.com/images/M/MV5BNTBlZDU3ODItOGJhYy00MjlhLWFjNzgtYWVhY2FiOWQ1MmUwXkEyXkFqcGdeQXVyNzg5MjYxOTU@._V1_.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 20</h2></div>
            </a>
            </li>
          
              </div>
              </div>
             
  
      </section>
    
        
      `;
    }
  }
customElements.define('gravityfvideo2-component', gravityfvideo2);





/* Vampire Hunter D --------------------------------------------------------------------------------------------------------------*/
class hunterdrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A43.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGVmNzNmMjEtZTBjYi00ODExLTkwMWEtMzJjYzk0MTE2YmY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      
            <li class="movie-box">
                <a href="/play-page-1/A19.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Bloodlust</h2></div>
                        </a>
                </li>
     
      </div>
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('hunterdrelate-component', hunterdrelate);

    /* Vampire Hunter D Video ------------------------------------------*/
class hunterdvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/vampirehunter/1.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGVmNzNmMjEtZTBjYi00ODExLTkwMWEtMzJjYzk0MTE2YmY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      
            <li class="movie-box">
                <a href="/Xemphim/vampirehunter/2.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2>
                        <h2 class="title2">Bloodlust</h2></div>
                        </a>
                </li>
     
      </div>
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('hunterdvideo-component', hunterdvideo);







/* How to Train Your Dragon --------------------------------------------------------------------------------------------------------------*/
class dragonrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A31.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2>
                
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('dragonrelate-component', dragonrelate);


/* How to Train Your Dragon --------------------------------------------------------------------------------------------------------------*/
class dragonvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/howtotrainyourdragon/m1.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2>
                
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('dragonvideo-component', dragonvideo);






/* Harypoter --------------------------------------------------------------------------------------------------------------*/
class harypoterrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
    <a href="/play-page-1/A34.html">
        <div class="box-img">
        <img src="https://malaysubtitle.com/wp-content/uploads/2022/03/Harry-Potter-and-the-Sorcerers-Stone-2001-Malay-Subtitle.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Harry Potter</h2>
            <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
            </a>
    </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('harypoterrelate-component', harypoterrelate);

/* Harypoter --------------------------------------------------------------------------------------------------------------*/
class harypotervideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
    <a href="/Xemphim/harrypoter/1.html">
        <div class="box-img">
        <img src="https://malaysubtitle.com/wp-content/uploads/2022/03/Harry-Potter-and-the-Sorcerers-Stone-2001-Malay-Subtitle.jpg" alt="" class="img"></div>
    
        <div class="box-text">
            <h2 class="title">Harry Potter</h2>
            <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
            </a>
    </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('harypotervideo-component', harypotervideo);




/* Madgascar season --------------------------------------------------------------------------------------------------------------*/
class madagascar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A35.html">
                    <div class="box-img">
                    <img src="/img/madagascar/11.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2>
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A51.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTE2YzljYzAtMzRlMi00ZmY1LThiMTMtZGQ3OTI3MTNmOWI2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
              
                    <div class="box-text">
                        <h2 class="title">Madagascar 2</h2>
                        <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('madagascar-component', madagascar);


/* Madagascar video --------------------------------------------------------------------------------------------------------------*/
class madagascarvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/madagascar/1.html">
                    <div class="box-img">
                    <img src="/img/madagascar/11.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2>
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/madagascar/2.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTE2YzljYzAtMzRlMi00ZmY1LThiMTMtZGQ3OTI3MTNmOWI2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
              
                    <div class="box-text">
                        <h2 class="title">Madagascar 2</h2>
                        <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
  customElements.define('madagascarvideo-component', madagascarvideo);











/* Dragon Maid Season relate --------------------------------------------------------------------------------------------------------------*/
class Dmrelate extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A37.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/I/71nj7OvsacL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A99.html">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="/play-page-1/A98.html">
                                <div class="box-img">
                                <img src="https://www.themoviedb.org/t/p/w500/t29LG7jFCfg0z1j8W5LYrTtc3VN.jpg" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>


      `;
    }
  } 
  customElements.define('dmrelate-component', Dmrelate);


  
/* DRagon maid s1 video --*/
class dmvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="#season1">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/I/71nj7OvsacL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A99.html">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="/play-page-1/A98.html">
                                <div class="box-img">
                                <img src="https://www.themoviedb.org/t/p/w500/t29LG7jFCfg0z1j8W5LYrTtc3VN.jpg" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season1">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
      <!--list tap Content---------------------------------->
      <div class="list-content">
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZGI4ZDk3ZjEtNzY4OS00Y2Y3LWIzNGQtYTZlYmRjNTg1NGYzXkEyXkFqcGdeQXVyOTA0MzY4MjY@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/2.html">
              <div class="box-img">
              <img src="https://pictures.betaseries.com/banners/episodes/14599/a7b58f09bb4e617b4a47cab6a571b166.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/3.html">
              <div class="box-img">
              <img src="https://img1.ak.crunchyroll.com/i/spire4-tmb/3f48ada9b85b1448746a0c71d0010e8a1485219326_full.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/4.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYjlhY2I4MmEtMWQ0Ny00YjhhLWE5OGMtZmM5NjQxYmMwZjJkXkEyXkFqcGdeQXVyMTQ2ODE0NDA@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/5.html">
              <div class="box-img">
              <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/d00c15c34bd5714818e983ea922b56f8.jpe" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/6.html">
              <div class="box-img">
              <img src="https://image.tmdb.org/t/p/original/2m69O6ZlGPcmzePcFY4Oo1K3QVq.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/7.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNGFmM2ZiODMtY2Y2Mi00N2UzLTlmMzItYTA3ODU2NzU2ZGJiXkEyXkFqcGdeQXVyMTQ2ODE0NDA@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/8.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMzhiMmRkMDgtMTFmOS00NjVlLTkwZTEtNDAwZWMxYmU4MTY0XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/9.html">
              <div class="box-img">
              <img src="https://is2-ssl.mzstatic.com/image/thumb/-In9ao0z00EWH3h94PwTSg/1200x675.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/10.html">
              <div class="box-img">
              <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315gGB/cms/episode-review/113474/kobayashi-ep-10.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/11.html">
              <div class="box-img">
              <img src="https://pictures.betaseries.com/banners/episodes/14599/bc0bdc6335e3a3e0332a62c068f8a465.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/12.html">
              <div class="box-img">
              <img src="https://img1.ak.crunchyroll.com/i/spire3-tmb/d15b566956cd391ed368466bdc8ea2bb1632277951_full.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/13.html">
              <div class="box-img">
              <img src="https://preview.redd.it/fuil26k0nh771.png?width=737&format=png&auto=webp&s=b12907339bff751a4e463f8738ec0c5bcef77ff9" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>
    
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s1/14.html">
              <div class="box-img">
              <img src="https://theglorioblog.files.wordpress.com/2018/01/dragonmaid_14-1.jpg?w=700&h=391" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Special</h2></div>
              </a>
          </li>
    
    
    </div>
    

</div>    
</section>
        
      `;
    }
}
customElements.define('dmvideo1-component', dmvideo);
  
/* DRagon maid s2 video --*/
class dmvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A37.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/I/71nj7OvsacL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A99.html">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="#season2">
                                <div class="box-img">
                                <img src="https://www.themoviedb.org/t/p/w500/t29LG7jFCfg0z1j8W5LYrTtc3VN.jpg" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

        
        
      <!--Video List--------------------------------------------------------------------------------------->
    
    <div class="video-list" id="season2">
        <div class="heading">
            <span>Danh sách tập</span>
        </div>
      
        <!--list tap Content---------------------------------->
      <div class="list-content">
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/1.html">
              <div class="box-img">
              <img src="https://sportshub.cbsistatic.com/i/2021/12/29/88a32897-bd23-4a14-88cd-c719e6e91e57/miss-kobayashi-dragon-maid-ilulu.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/2.html">
              <div class="box-img">
              <img src="https://cdn.aniblogtracker.com/live/20210715/1626310994.17332.42704.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/3.html">
              <div class="box-img">
              <img src="https://staticg.sportskeeda.com/editor/2022/03/61c52-16466723436872-1920.jpg?name=small" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/4.html">
              <div class="box-img">
              <img src="https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/100006543/697c1c8b-ec39-415f-8714-82b3d2af8224/100006543_KDM0017_bfd19ab6-bb9a-4105-8680-96318515a86c.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/5.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2021/08/Screenshot-33-1024x576-1.jpg" alt="" class="img"></div>
         
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/6.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2021/08/Screenshot-116-1024x576-1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOqnt-svBi96f-05EiZosYivh5Bm8YJs4lQ_BU9KdTEOSXNLhsQFYM_PzJ6_9xV_2or4&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/8.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2021/08/Screenshot-327-1024x576-1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/9.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2021/09/Miss-Kobayashis-Dragon-Maid-Season-2-Episode-9.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/10.html">
              <div class="box-img">
              <img src="https://64.media.tumblr.com/72834b5570a7fec3f756bd24885f2c72/14e7c0b74712a382-c4/s1280x1920/c1f829e09c4011dfb41948789fc78b04442079b2.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/11.html">
              <div class="box-img">
              <img src="https://www.leisurebyte.com/wp-content/uploads/2021/09/Screenshot-867-1024x576-1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/12.html">
              <div class="box-img">
              <img src="https://cdn.aniblogtracker.com/live/20210923/1632355995.21826.47928.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/haugairong/s2/13.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY40l7xcMpvRzTawNUYcXFu07wAJ5VkdG0w&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Special</h2></div>
              </a>
          </li>
    
    
    </div>
    

</div>    
</section>
        
      `;
    }
}
customElements.define('dmvideo2-component', dmvideo2);

  /* DRagon maid special video --*/
  class dmspecial extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="/play-page-1/A37.html">
                            <div class="box-img">
                            <img src="https://m.media-amazon.com/images/I/71nj7OvsacL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Mùa 1</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                        <a href="#special">
                            <div class="box-img">
                            <img src="https://cdn.myanimelist.net/images/anime/1013/121928.jpg" alt="" class="img"></div>
                        
                            <div class="box-text">
                                <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                            
                                <h2 class="title2">Specials</h2></div>
                            </a>
                        </li> 
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                            <a href="/play-page-1/A98.html">
                                <div class="box-img">
                                <img src="https://www.themoviedb.org/t/p/w500/t29LG7jFCfg0z1j8W5LYrTtc3VN.jpg" alt="" class="img"></div>
                            
                                <div class="box-text">
                                    <h2 class="title">Hầu gái rồng nhà Kobayashi</h2>
                                
                                    <h2 class="title2">Mùa 2</h2></div>
                                </a>
                            </li> 
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

    <!--Video List--------------------------------------------------------------------------------------->
  
  <div class="video-list" id="special">
  
    <!--list tap Content---------------------------------->
    <div class="list-content">
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/1.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
        </li>
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/2.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
       
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/3.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>
    
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/4.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/5.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
       
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/6.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>
  
    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/haugairong/special/7.html">
            <div class="box-img">
            <img src="https://i.ytimg.com/vi/1m22tarR_vo/hqdefault.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>
  
  </div>
  </div>
  
  
  
    
  
  </div>
  </section>
        
      `;
    }
  }
  customElements.define('dmspecial-component', dmspecial);
  


















/* CatsleVania Season --------------------------------------------------------------------------------------------------------------*/
class vaniaSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A47.html">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A106.html">
                    <div class="box-img">
                    <img src="https://d.newsweek.com/en/full/1186487/castlevania-season-2-poster.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A107.html">
                    <div class="box-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/o3JhXtISgEIt3xgQBADFl-4NBFg=/0x0:1409x1409/1400x1400/filters:focal(628x154:629x155)/cdn.vox-cdn.com/uploads/chorus_asset/file/19770810/Square_2_Post_2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A108.html">
                    <div class="box-img">
                    <img src="https://www.arthipo.com/image/cache/catalog/poster/anime/1898-2381/anime1965-castlevania-4-742x1100.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('vaniaseason-component', vaniaSeason);





/* Castlevania s1 video --*/
class vaniavideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A106.html">
                    <div class="box-img">
                    <img src="https://d.newsweek.com/en/full/1186487/castlevania-season-2-poster.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A107.html">
                    <div class="box-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/o3JhXtISgEIt3xgQBADFl-4NBFg=/0x0:1409x1409/1400x1400/filters:focal(628x154:629x155)/cdn.vox-cdn.com/uploads/chorus_asset/file/19770810/Square_2_Post_2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A108.html">
                    <div class="box-img">
                    <img src="https://www.arthipo.com/image/cache/catalog/poster/anime/1898-2381/anime1965-castlevania-4-742x1100.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

  

  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s1/1.html">
              <div class="box-img">
              <img src="https://s3-us-west-2.amazonaws.com/files.geekgirlauthority.com/wp-content/uploads/2017/07/CastlevaniaS0101b.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s1/2.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNDcwMDFlZDEtMDAxZi00YWRmLTgzN2EtODVhNWNiMWQ3MjRjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s1/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMmFkOTcwYjktZDY5ZS00ZmYyLWJhOTktZjcyY2FlYTE4MmI4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s1/4.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMmM5YTc4NzctZDlkOC00ZTRkLTkzZGEtOTA1OTA0OGZhNzgyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>



  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('vaniavideo-component', vaniavideo);

/* Castlevania s2 video --*/
class vaniavideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A47.html">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season2">
                    <div class="box-img">
                    <img src="https://d.newsweek.com/en/full/1186487/castlevania-season-2-poster.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A107.html">
                    <div class="box-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/o3JhXtISgEIt3xgQBADFl-4NBFg=/0x0:1409x1409/1400x1400/filters:focal(628x154:629x155)/cdn.vox-cdn.com/uploads/chorus_asset/file/19770810/Square_2_Post_2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A108.html">
                    <div class="box-img">
                    <img src="https://www.arthipo.com/image/cache/catalog/poster/anime/1898-2381/anime1965-castlevania-4-742x1100.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>

  

  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BN2IxZWVkNDktYzZiNy00YTdiLThjNjgtOWI4ZTdmYmY5MTlhXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/2.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/03/castlevania-s2-e2-1.png?resize=800%2C440&ssl=1" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/3.html">
              <div class="box-img">
              <img src="https://decider.com/wp-content/uploads/2018/10/castlevania-2.jpg?quality=75&strip=all" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/4.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s2-e4-3.png?fit=800%2C440&ssl=1" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/5.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s2-e5-1.png?resize=800%2C440&ssl=1" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/6.html">
              <div class="box-img">
              <img src="https://www.screenspy.com/wp-content/uploads/2022/04/castlevania-s2-e6-2.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/7.html">
              <div class="box-img">
              <img src="https://www.screenspy.com/wp-content/uploads/2022/04/castlevania-s2-e7-5.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s2/8.html">
              <div class="box-img">
              <img src="https://www.screenspy.com/wp-content/uploads/2022/04/castlevania-s2-e8-3.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>



  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('vaniavideo2-component', vaniavideo2);





/* Castlevania s3 video --*/
class vaniavideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A47.html">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A106.html">
                    <div class="box-img">
                    <img src="https://d.newsweek.com/en/full/1186487/castlevania-season-2-poster.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season3">
                    <div class="box-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/o3JhXtISgEIt3xgQBADFl-4NBFg=/0x0:1409x1409/1400x1400/filters:focal(628x154:629x155)/cdn.vox-cdn.com/uploads/chorus_asset/file/19770810/Square_2_Post_2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A108.html">
                    <div class="box-img">
                    <img src="https://www.arthipo.com/image/cache/catalog/poster/anime/1898-2381/anime1965-castlevania-4-742x1100.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  

  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season3">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/1.html">
              <div class="box-img">
              <img src="https://hips.hearstapps.com/hmg-prod/images/castlevania-season-3-1583498354.png?resize=980:*" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/2.html">
              <div class="box-img">
              <img src="https://cf.geekdo-images.com/kDpKtabcGFBg0yaOAb2KXg__large/img/sdR9txtKO6jnLN_pJraoliToOuk=/fit-in/1024x1024/filters:no_upscale():strip_icc()/pic7064938.png" 
              alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYWVlMzE5YTQtMWJmYi00MTM4LWIxNzAtNDM3ZDlkMWZhMDQ4XkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/4.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeD6yWAeXxOE3kNpvBWkOw4iNFlKMQ9S7G_EAWKBbobXqhQ3azH3l1zX1t1C-aT75nTE&usqp=CAU" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/5.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiN-CFhG9jzvvbsBuLJEZ-I9tkcA73_PMIqrmLdJ5Pwhtunhbp4W6YZbLnkgRV22Jh16U&usqp=CAU" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/6.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s3-e6-2.png?ssl=1"
               alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/7.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s3-e7-3.png?ssl=1" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s3/8.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/03/VideoScreenshot-CastlevaniaE8WhattheNightBrings-1126.jpg?ssl=1" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/castlevania/s3/9.html">
                  <div class="box-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUtadxbDGZ7EpC0UQkvun7I8blkphsdnO4WkYyCqER7DLIOJMZz1uUnktMyzvFzuL5Xk&usqp=CAU" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 9</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
              <li class="list-box">
                  <a href="/Xemphim/castlevania/s3/10.html">
                      <div class="box-img">
                      <img src="https://i0.wp.com/hauntedmtl.com/wp-content/uploads/2020/03/final-battle.png?fit=640%2C321&ssl=1" 
                      alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tập 10</h2></div>
                      </a>
                  </li>




  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('vaniavideo3-component', vaniavideo3);

/* Castlevania s4 video --*/
class vaniavideo4 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A47.html">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A106.html">
                    <div class="box-img">
                    <img src="https://d.newsweek.com/en/full/1186487/castlevania-season-2-poster.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A107.html">
                    <div class="box-img">
                    <img src="https://cdn.vox-cdn.com/thumbor/o3JhXtISgEIt3xgQBADFl-4NBFg=/0x0:1409x1409/1400x1400/filters:focal(628x154:629x155)/cdn.vox-cdn.com/uploads/chorus_asset/file/19770810/Square_2_Post_2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season4">
                    <div class="box-img">
                    <img src="https://www.arthipo.com/image/cache/catalog/poster/anime/1898-2381/anime1965-castlevania-4-742x1100.webp" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Castlevania-Lâu Đài Ma Cà Rồng</h2>
                        <h2 class="title2">Mùa 4</h2></div>
                        </a>
                </li>
     
      </div>

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  

  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season4">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/1.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JGk1OpzwNKEju96sFfVCHThxge73W0LjuAv7jP4576T1TMBYz978wGPSkBjOvP7KNwA&usqp=CAU" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/2.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s4-e2-4.png?ssl=1"
              
              alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/3.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s4-e3-3.png?fit=800%2C440&ssl=1" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/4.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s4-e4-2.png?ssl=1" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/5.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYNss1n3xrEwKaUviWoRfeZcyEVJ6A2hNkHFvW3L2RhC2ZC-hfq4c9jcF8GBe5pQSO6U&usqp=CAU" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/6.html">
              <div class="box-img">
              <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/castlevania-s4-e6-4.png?fit=800%2C440&ssl=1"
               alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FCbtGet9XQdSw9X2yQ87WoXyMOPffaZBCN3t1-xlqbZVFtRI5Pbw-EXQjMJVgS98Lkg&usqp=CAU" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/castlevania/s4/8.html">
              <div class="box-img">
              <img src="https://i.pinimg.com/originals/5e/a0/24/5ea0248c3640ad14f845b02ed7e1d4b2.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/castlevania/s4/9.html">
                  
                      <div class="box-img">
                      <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/05/castlevania-s4-e9-3.png?fit=800%2C440&ssl=1" 
                      alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tập 9</h2></div>
                      </a>
                  </li>

                  <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/castlevania/s4/10.html">
                  
                      <div class="box-img">
                      <img src="https://i0.wp.com/www.screenspy.com/wp-content/uploads/2022/04/VideoScreenshot-CastlevaniaE10ItsBeenaStrangeRide-2045.jpg?ssl=1" 
                      alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tập 10</h2></div>
                      </a>
                  </li>




  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('vaniavideo4-component', vaniavideo4);















/* DevilMayCry video --*/
class devilcryvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <section class="season">
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/1.html">
              <div class="box-img">
              <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a2bd8eae7a1a3c614910ed968f533397.jpe" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/2.html">
              <div class="box-img">
              <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f41e4d94d3f3e9494c23421614c37786.jpe" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/3.html">
              <div class="box-img">
              <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/2250dbe1fab3ab3227205791a35c292f.jpe" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/4.html">
              <div class="box-img">
              <img src="https://images.static-bluray.com/reviews/1738_1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/5.html">
              <div class="box-img">
              <img src="https://cdn.kanobu.ru/anime/images/112/e956c590-3f69-41a2-a8a1-e6411ae822ea.webp" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/6.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/7.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/devilmaycry/8.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/devilmaycry/9.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 9</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
              <li class="list-box">
                  <a href="/Xemphim/devilmaycry/10.html">
                      <div class="box-img">
                      <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
                  
                      <div class="box-text">
                          <h2 class="title">Tập 10</h2></div>
                      </a>
                  </li>

                  <!--box1------------------------------------------>
                  <li class="list-box">
                      <a href="/Xemphim/devilmaycry/11.html">
                          <div class="box-img">
                          <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
                      
                          <div class="box-text">
                              <h2 class="title">Tập 11</h2></div>
                          </a>
                      </li>

                      <!--box1------------------------------------------>
                      <li class="list-box">
                          <a href="/Xemphim/devilmaycry/12.html">
                              <div class="box-img">
                              <img src="https://m.media-amazon.com/images/M/MV5BZTFkMjAzNzAtMDRkYi00MTE5LWIyYmItZDhhNmU3ODY4NzdiXkEyXkFqcGdeQXVyNDc4OTMyNTU@._V1_.jpg" alt="" class="img"></div>
                          
                              <div class="box-text">
                                  <h2 class="title">Tập 12</h2></div>
                              </a>
                          </li>


  </div>
  </div>
        </section>
      `;
    }
  }
customElements.define('devilcryvideo-component', devilcryvideo);







/* DragonAge Season --------------------------------------------------------------------------------------------------------------*/
class dragonageSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A48.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMDY1ZDkyZTktMGIyMy00OWFlLWE5YzYtYzBjYjQzZGMyZDIxXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Dragon Age</h2>
                        <h2 class="title2">Absolution</h2></div>
                        </a>
                </li>
     
      </div>

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  </section>
      `;
    }
  } 
customElements.define('dragonageseason-component', dragonageSeason);

/* dragonage video --*/
class dragonagevideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMDY1ZDkyZTktMGIyMy00OWFlLWE5YzYtYzBjYjQzZGMyZDIxXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Dragon Age</h2>
                        <h2 class="title2">Absolution</h2></div>
                        </a>
                </li>
     
      </div>

  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/1.html">
              <div class="box-img">
              <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/11/dragon-age-anime-cast.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/2.html">
              <div class="box-img">
              <img src="https://admin.esports.gg/wp-content/uploads/2022/12/Will-there-be-a-Dragon-Age-Absolution-Season-2.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZGQ4ZjAxZTUtZGVjZS00MzA2LWI5NGYtZWQ0NGY5NWNmMWQ3XkEyXkFqcGdeQXVyMzg1OTc1ODk@._V1_QL75_UX500_CR0,230,500,281_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/4.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFek88vBCKiyoh4i6vCGBXCp_F0GUmOI0bAsMEzVNT_2FqOXFAs7CFGezHO2YG7tb2OWc&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/5.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MyPq1B_CPZsaDcIhW_d_tHxP-ixACas0Dg&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/dragonage/s1/6.html">
              <div class="box-img">
              <img src="https://cfm.yidio.com/images/tv/71610/1834730/episode-image-400x225.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('dragonagevideo-component', dragonagevideo);











/* Overlord Season --------------------------------------------------------------------------------------------------------------*/
class OverlordSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A44.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A104.html">
                    <div class="box-img">
                    <img src="https://images.justwatch.com/poster/289721576/s718/season-2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A105.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('overlordseason-component', OverlordSeason);

/* Overlord s1 video --*/
class overlordvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A104.html">
                    <div class="box-img">
                    <img src="https://images.justwatch.com/poster/289721576/s718/season-2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A105.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/1.html">
              <div class="box-img">
              <img src="https://img1.ak.crunchyroll.com/i/spire1-tmb/b0b4730ef0a27db3125ce574d83a0ee81494830437_full.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/2.html">
              <div class="box-img">
              <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/overlord.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/3.html">
              <div class="box-img">
              <img src="https://cfm.yidio.com/images/tv/28948/687642/episode-image-400x225.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/4.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/d68834ab0cff02ed6b4737e8cd36db30dcd2e18f.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/5.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNzBmY2Q2MWEtMTVkZC00ODI4LWE0YWEtM2M0NjdlYzg0ZjI1XkEyXkFqcGdeQXVyNjg3MDE2OTQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/6.html">
              <div class="box-img">
              <img src="https://cms.dmpcdn.com/movie/2021/09/28/915b8b80-2049-11ec-ad33-c132ed91df8f_webp_original.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/7.html">
              <div class="box-img">
              <img src="https://www.comingsoon.net/wp-content/uploads/sites/3/2022/08/overlord-s4-ep6.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/8.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0M917lpBNdCJDLY2ePgbpZKAtUtrxVaw8vH_n9SzhRGs1daezCpKsgqfjwZAIaeGiLw&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/9.html">
              <div class="box-img">
              <img src="https://img-zlr1.tv360.vn/image1/2022/08/30/23/25a32c5a/25a32c5a-c777-4f01-94f9-b473b7e35d40_640_360.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/10.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0qbPJ6UG47mPjGxw2jWwvKBra89-6BNdWe1G-ylwQghr5xWj3mDghc-SeVQbPleJxFk&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/11.html">
              <div class="box-img">
              <img src="https://canvas-bridge02.tubitv.com/OwfE-oLr7TojHE7luN2whnemzZQ=/640x360/smart/img.adrise.tv/1e310acd-f8be-4181-8ef7-6c150f8f752b.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/12.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/32b848a484f47c49a6704fb67b6b33fb.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s1/13.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpE86kG8PrDB-GJCuLlu4kziUYhwDpg32-cN04SkQYQpxT5VPauYbY1sqJ-DkMjDCoDgQ&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('overlordvideo1-component', overlordvideo);







/* Overlord s2 video --*/
class overlordvideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A44.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season2">
                    <div class="box-img">
                    <img src="https://images.justwatch.com/poster/289721576/s718/season-2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A105.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/1.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/n0Yxe67ocfs/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/2.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/5K4lZSAgTQ0/maxresdefault.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/3.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/f392afe04ca61a6c8d96993f3155503008b62902.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/4.html">
              <div class="box-img">
              <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/b96eff2d-8d07-4e67-9c8c-ae040da77d53.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/5.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMDVlZDE4OGMtZmFmNS00ZTBjLWE2MmEtMTljZTgwZGRiZDhmXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/6.html">
              <div class="box-img">
              <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/e2a7b868-95ed-4f06-a0dd-a675ecaad83d.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/7.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/2f38446bee17074ad0f1f07dd10a0c31.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/8.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/iitDPwquhD4/hqdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/9.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/JIiwODC3GU4/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/10.html">
              <div class="box-img">
              <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315gFA/cms/episode-review/128943/overlord-2-ep10.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/11.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/deca9cb5e8f86fdb47dcbc4911ffa296af414eb6.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/12.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/7eb83952b4421a0ee51b54d073b50ea2.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s2/13.html">
              <div class="box-img">
              <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/f41f12a0-6387-4e1e-9a33-907204ddf1e9.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('overlordvideo2-component', overlordvideo2);



/* Overlord s3 video --*/
class overlordvideo3 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A44.html">
                    <div class="box-img">
                    <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A104.html">
                    <div class="box-img">
                    <img src="https://images.justwatch.com/poster/289721576/s718/season-2.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season3">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Overlord: Lạc Vào Thế Giới Game</h2>
                        <h2 class="title2">Mùa 3</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season3">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/1.html">
              <div class="box-img">
              <img src="https://i0.wp.com/doublesama.com/wp-content/uploads/2022/07/Overlord-IV-Episode-1-Fith-and-the-other-maids.jpg?resize=640%2C360" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/2.html">
              <div class="box-img">
              <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/29625aef-ccd5-46f4-a9b9-eec7a1bd2b57.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/3.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrSUoNcwEobZNOXi4SvXSS_t9rqW1BLoD0XHmpmNm4lWJzQRDQ0HeWnaI6DfevGC-C_k&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/4.html">
              <div class="box-img">
              <img src="https://pm1.aminoapps.com/6907/8f68d87cb06d944e85aefbc3bff8b88ed7fc0a9dr1-700-366v2_uhq.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/5.html">
              <div class="box-img">
              <img src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/cdn1/movies-pictures/dd2ff3a5-d96d-488c-871b-a77b212daddf.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/6.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/2615e056b0ccb90bd8973e43f3994b2d2f9199c2.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/7.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/b38e043fe16507365a23f1007be4fd77.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/8.html">
              <div class="box-img">
              <img src="https://flxt.tmsimg.comstatics/p16245504_i_h9_aa.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/9.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/_Lya_ao96kA/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/10.html">
              <div class="box-img">
              <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/91d35d8d1755642926bf7ab4af304516773962e97fae5e7ff732c5b8201af86b._RI_TTW_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/11.html">
              <div class="box-img">
              <img src="https://cfm.yidio.com/images/tv/28948/1266437/episode-image-400x225.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/12.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNGY1NTE0OGMtMTM3NC00MjdlLTgzMjUtYTBiNTg3NTAwMWNmXkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/overlord/s3/13.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/DhQ1685ThoQ/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('overlordvideo3-component', overlordvideo3);















/* 5Brigde Season --------------------------------------------------------------------------------------------------------------*/
class fivebSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A109.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg/220px-The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/sp/1.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/play-page-1/A94.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('fivebseason-component', fivebSeason);





/* 5Brigde Season movie --------------------------------------------------------------------------------------------------------------*/
class fivebSeason2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A109.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg/220px-The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/sp/1.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/movie/a.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('fivebseason2-component', fivebSeason2);



/* 5Brigde s1 video --*/
class fivebvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A109.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg/220px-The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>


      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/sp/1.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
            </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/play-page-1/A94.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/1.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdWAeS7JMu3yAI3enUawdCPES4IX-fUsRr51mEk4YrbbctAnqvOWAS145Cjr6eXeghn4&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/2.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYWM0ZWRjODgtMWE2Mi00MWVkLTgyNjQtMGIyOWY4NTM5OTdhXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/3.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vdiHL7gi4u1zdssiJEZNuILo9I-CuAS7YQ&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/4.html">
              <div class="box-img">
              <img src="https://img1.ak.crunchyroll.com/i/spire3-tmb/0b0ba7b6fd08ce31fd95639589097c061548970006_full.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/5.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26DI3L7OaZgqkt6YW92eyrTcgnkNovkN4Pg&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/6.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3met6XU9tE8Zif3AaxnOcNGBniJnD-pNMhT6QcfVl8V73gT4SIQMEbIL8mndIsViHK0A&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/7.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/fb8df2f1e1aaec66fbf1c6ec857a2e4e.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/8.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/ed0b60981795686ea6ec034fd2b339a2.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/9.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/HJcRfKGN9nA/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/10.html">
              <div class="box-img">
              <img src="https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/V1732233/artwork/8eda4faf-1440-4580-8a97-c507ec36ea1e_keyartofficialvideoimage.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/11.html">
              <div class="box-img">
              <img src="https://www.animenewsnetwork.com/thumbnails/crop600x315gEE/cms/episode-review.2/144865/quinep11.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s1/12.html">
              <div class="box-img">
              <img src="https://img.betaseries.com/QE1uGq7xju4othjuc9ljgBztMgc=/380x191/smart/https%3A%2F%2Fpictures.betaseries.com%2Fbanners%2Fepisodes%2F355966%2Fb1bdb213268f1d70c92862d96c548a96.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('fivebvideo-component', fivebvideo);




/* 5Brigde s2 video --*/
class fivebvideo22 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season2">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg/220px-The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/sp/1.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/play-page-1/A94.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/1.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/db59f214dd6d586f87056b3308b61a30.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/2.html">
              <div class="box-img">
              <img src="https://entriesfromanintrovert.files.wordpress.com/2021/01/s2e2-feature-e1610833794900.jpg?w=1200" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/3.html">
              <div class="box-img">
              <img src="https://static.wixstatic.com/media/76b481_d5185c8b59194feab2586187d92ee5cd~mv2.jpg/v1/fit/w_1000%2Ch_908%2Cal_c%2Cq_80,enc_auto/file.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/4.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIc1npH9_GmEzkB4hIHDSeWmlYaXuppVcsFFMwwgmx562-TUTR2pC4bMiTO9HVnih27A8&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/5.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/d39862705a48fb6fb3bc89bcd49d0e28.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/6.html">
              <div class="box-img">
              <img src="https://randomc.net/image/Go-Toubon%20no%20Hanayome/Go-Toubun%20no%20Hanayome%20S2%20-%2006%20-%20Large%2008.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2FFNRZvD93D7wk5whckp7aTsew-ps_SbWPrpwgslWOCR2naG-hXHz8o2fMw4hB0CBjI&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/8.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/8WKzFpGtv7A/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/9.html">
              <div class="box-img">
              <img src="https://entriesfromanintrovert.files.wordpress.com/2021/03/nino-kiss-feature.png?w=1200" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/10.html">
              <div class="box-img">
              <img src="https://entriesfromanintrovert.files.wordpress.com/2021/03/yotsuba-episode-10-feature.jpg?w=1200" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/11.html">
              <div class="box-img">
              <img src="https://entriesfromanintrovert.files.wordpress.com/2021/03/miku-crying.jpg?w=640" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/s2/12.html">
              <div class="box-img">
              <img src="https://randomc.net/image/Go-Toubon%20no%20Hanayome/Go-Toubun%20no%20Hanayome%20S2%20-%2012%20-%20Large%2031.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box" id="sp">
          <a href="/Xemphim/5nangdau/sp/1.html">
              <div class="box-img">
              <img src="https://staticg.sportskeeda.com/editor/2023/08/d4ff9-16914918178257-1920.jpg?w=840" alt="" class="img"></div>
              <div class="box-text">
                  <h2 class="title">Special 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/5nangdau/sp/2.html">
              <div class="box-img">
              <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/06/thequintessentialquintuplets_maintrailerscreenshot.png?fit=1920%2C1080&ssl=1" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Special 2</h2></div>
              </a>
          </li>
        

  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('fivebvideo22-component', fivebvideo22);

/* 5Brigde Special --*/
class fivebvideos extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A69.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A109.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg/220px-The_Quintessential_Quintuplets_%E2%88%AC_anime_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/Xemphim/5nangdau/sp/1.html">
                    <div class="box-img">
                    <img src="https://image.lag.vn/upload/news/23/04/03/anime-gotoubun-no-hanayome-cong-bo-season-3-2_JYUT.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Special</h2></div>
                        </a>
                </li>
                </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
            <li class="movie-box">
                <a href="/play-page-1/A94.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Nhà Có 5 Nàng Dâu</h2>
                        <h2 class="title2">Movie</h2></div>
                        </a>
                </li>

                
     
      </div>

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="sp">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('fivebvideos-component', fivebvideos);


/* Witch Craft Work Season --------------------------------------------------------------------------------------------------------------*/
class witchcraftSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A70.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Witch Craft Works</h2>
                        <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('witchcseason-component', witchcraftSeason);



/* Witch Craft s1 video --*/
class witchcvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Witch Craft Works</h2>
                        <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/1.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/a438d8481eb8c4188704665b7acce087.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/2.html">
              <div class="box-img">
              <img src="https://rabujoi.files.wordpress.com/2014/01/witch2-1.jpg" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/3.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYD5wz3ux16tKykMPPANshnkLj_7nTEj4xLuUffPYVjTQ0JXs-vDTUycNdATl62C-irbQ&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>
      
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/4.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0zQggTzcQaSNsqGLY6uYQ2wTIwciNEjmU06_JZgQMCZJ0pKckmUa8Pf3OvdscEXDgG8&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/5.html">
              <div class="box-img">
              <img src="https://i1.wp.com/metanorn.net/wp-content/uploads/2014/02/Witch-Craft-Works-Dont-Look.jpg?fit=650%2C366" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/6.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/52965b8e32583b78bd4186d29dffac0050f9d4d0.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/7.html">
              <div class="box-img">
              <img src="https://rabujoi.files.wordpress.com/2014/02/wcw71.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/8.html">
              <div class="box-img">
              <img src="https://rabujoi.files.wordpress.com/2014/02/witch81.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/9.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2014/03/witchcraftworks_09.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/10.html">
              <div class="box-img">
              <img src="https://simkl.in/episodes/83/838786109eac7fb7b_w.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/11.html">
              <div class="box-img">
              <img src="https://simkl.in/episodes/83/83878593468a6682b_w.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/Witchcraftwork/s1/12.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/qFiBwicF38o/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box" id="ova">
          <a href="/Xemphim/Witchcraftwork/s1/13.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIt_UniO2QqIqehizwRv_Tda_o7o-ztEBXqeowDrqfiKRULkJfighNiCTNOTY64cws1c&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Ova</h2></div>
              </a>
          </li>

          


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('witchcvideo-component', witchcvideo);



/* Burn The Witch Season --------------------------------------------------------------------------------------------------------------*/
class bwSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A71.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
               
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2>
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>

      `;
    }
  } 
customElements.define('bwseason-component', bwSeason);

/* Burn The Witch s1 video --*/
class bwvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#season1">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
               
                    <div class="box-text">
                        <h2 class="title">Burn The Witch</h2>
                        <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                        </a>
                </li>
     
      </div>

      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/burnthewitch/s1/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMGEyMDBlMTItMTVlYS00Zjg0LTg3YWQtYTA4OGY1ZTJiYjY0XkEyXkFqcGdeQXVyODEyMDIxNDY@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/burnthewitch/s1/2.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfzyKVO3pHhLi280bMbZLVxhXpbcAF6Sd_w&usqp=CAU" alt="" class="img"></div>
         
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/burnthewitch/s1/3.html">
              <div class="box-img">
              <img src="https://www.siliconera.com/wp-content/uploads/2020/03/Burn-The-Witch-Anime-Film-Siliconera.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('bwvideo-component', bwvideo);








/* Tuổi Mới Lớn Mộng Mơ Season --------------------------------------------------------------------------------------------------------------*/
class rikkaSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('rikkaseason-component', rikkaSeason);

/* Tuổi Mới Lớn Mộng Mơ s1 video --*/
class rikkavideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/1.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/MoqBBLCKdVA/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/2.html">
              <div class="box-img">
              <img src="https://static.hidive.com/titles/CDK/256x144/CDK_01_002_256x144.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/3.html">
              <div class="box-img">
              <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e82d88fa16153354a99f5475d9d78c5600c3b7501a3310797656a6ae13d093a0._RI_TTW_SX720_FMjpg_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/4.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-z_Yu-YJTdBjIVS2lx1LVLH_OKWm7CAgp5AkFIHlmNaxPnuGtS4fxXI5Pr6xsXWAFag&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/5.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDywlWZ-ja_c8ned5hnLUlAQ9EYGsh0cDYVimSvP9Ogtv00bsgolPrmeqQhHIlfokoirg&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/6.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePOGeO_UfblDXsBzFIxeeJtcD_EZ-yN5BNA1B9S9Q4E3dQcukYBhARYqJg6B0tWTsnW0&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fD8phT04ig5g2Mu4utHublB8Uc8n5IHB4iMETOZS_t8s3AdP5llVY96CQDCt-ZUFFn4&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/8.html">
              <div class="box-img">
              <img src="https://theglorioblog.files.wordpress.com/2012/11/chuunibyou_08_02.jpg?w=700" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/9.html">
              <div class="box-img">
              <img src="https://pm1.aminoapps.com/5690/e6ff56eaca04338c68c33775d71ed74ae8dd1916_00.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/10.html">
              <div class="box-img">
              <img src="https://3.bp.blogspot.com/-SR-Tl2pinQU/UoDFAZZrlhI/AAAAAAAAAFA/dWCyWuDVFOc/s1600/vlcsnap-2013-11-11-19h44m41s132.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/11.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGRxg6oHmt3oAmtTDuqJFtshUpKRoDaCpii_ESiTfG8pjmwkk-2fc3MLPwO9fXXM35-c&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/12.html">
              <div class="box-img">
              <img src="https://theglorioblog.files.wordpress.com/2012/12/chuunibyou_12_09.jpg?w=700" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s1/13.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTNjYjA3NzYtY2Q2MS00ZTQxLTkwOTgtYmQwMGEzNjQ1MmIwXkEyXkFqcGdeQXVyOTk0NTA5NjY@._V1_QL75_UX500_CR0,0,500,281_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Special</h2></div>
              </a>
          </li>

      
          


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkavideo-component', rikkavideo);

/* Tuổi Mới Lớn Mộng Mơ Lite video --*/
class rikkalitevideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="lite">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/1.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/2.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/3.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/4.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/5.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/lite/6.html">
              <div class="box-img">
              <img src="https://mahoutofu.files.wordpress.com/2012/12/popo.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>  


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkalitevideo-component', rikkalitevideo);

/* Tuổi Mới Lớn Mộng Mơ OntherWWorld video --*/
class rikkavideoon extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="ona">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/1.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/2.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/3.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/4.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/5.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/ona/6.html">
              <div class="box-img">
              <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkavideoon-component', rikkavideoon);

/* Tuổi Mới Lớn Mộng Mơ s2 video --*/
class rikkavideo2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="#">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season2">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/1.html">
              <div class="box-img">
              <img src="https://relifeanime.files.wordpress.com/2014/01/0072.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/2.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReJVN5OtPdwn-5denFTAg_fOP2h8JvVnt9Tr1PTBSEe5gWF_NOUN5v7-E4pdpH1j8n52I&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/3.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/y5s3po2ViDU/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/4.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/xuRN07zhCP4/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/5.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/mLMumvzpuPU/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/6.html">
              <div class="box-img">
              <img src="https://relifeanime.files.wordpress.com/2014/02/1665.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQechunZxLFdyt9SH5T5D0m9C5KE-e3m96-g&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/8.html">
              <div class="box-img">
              <img src="https://pm1.aminoapps.com/6441/fc6f7b92ca4cf95a42265eedaed049a9332941d1_hq.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/9.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpXLIPNqeNwSrJnNDZjFUJ-EjA-LeCP8_wgS8BjCPy1de0GOF3SR61sg9TDgBpYZyysM&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/10.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y5fSMhFB5z0ZohKJtxQXM7oigr2MXXzxl7b_c8ChMxzQpSCO2wXN1_vR3PCBQ4VTuBE&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/11.html">
              <div class="box-img">
              <img src="https://pic-bstarstatic.akamaized.net/ugc/4af1009d912cb70a27c973f544e6822eec0623f6.png" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/12.html">
              <div class="box-img">
              <img src="https://benigmatica.files.wordpress.com/2014/03/chu2koi-ren-12-02.jpg?w=380&h=214" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/tuoithomongmo/specila/4.html">
                  <div class="box-img">
                  <img src="https://affinityforanime.files.wordpress.com/2012/10/chuunibyou1.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Lite Special</h2></div>
                  </a>
              </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/tuoithomongmo/s2/13.html">
              <div class="box-img">
              <img src="https://1.bp.blogspot.com/-E6z_OBN4O4A/XTqu4xsUfvI/AAAAAAAAAYg/OB_TWp-a27gcebBTJ4P__4D4cfWzArqrACLcBGAs/s1600/Chuunibyou%2Bdemo%2BKoi%2Bga%2BShitai%2521%2BRen%2BSpecials.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Special</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/tuoithomongmo/s2/14.html">
                  <div class="box-img">
                  <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/07/31/anime-chuunibyou-demo-koi-ga-shitai-cong-bo-visual-ky-niem-10-nam_1-2147.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Special 2</h2></div>
                  </a>
              </li>

              
      
          


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('rikkavideo2-component', rikkavideo2);

/* Tuổi Mới Lớn Mộng Mơ Movie1 video --*/
class rikkavideomovie1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/tuoithomongmo/movie/1.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A95.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
        
      `;
    }
  }
customElements.define('rikkavideomovie1-component', rikkavideomovie1);

/* Tuổi Mới Lớn Mộng Mơ Movie2 video --*/
class rikkavideomovie2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A76.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A111.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000179192946-y0k549-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Lite</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A112.html">
                    <div class="box-img">
                    <img src="https://i1.sndcdn.com/artworks-000380404065-yfx2ld-t500x500.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">ONA</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A77.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 1</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/play-page-1/A113.html">
                    <div class="box-img">
                    <img src="https://www.themoviedb.org/t/p/w500/anw0BBKyYQsLtTltDO4xMmpiCW6.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Mùa 2</h2></div>
                        </a>
                </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
                <a href="/Xemphim/tuoithomongmo/movie/2.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYmM0N2NiMGUtMzBkYy00NTc4LWFkZmEtMWRhZDY1N2NjNWVlXkEyXkFqcGdeQXVyMTk2MDc1MjQ@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                
                    <div class="box-text">
                        <h2 class="title">Tuổi Mới Lớn Mộng Mơ</h2>
                        <h2 class="title2">Movie 2</h2></div>
                        </a>
                </li>
     
      </div>
      
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
      
        
      `;
    }
  }
customElements.define('rikkavideomovie2-component', rikkavideomovie2);





/* Little Witch Academia Season --------------------------------------------------------------------------------------------------------------*/
class littlewSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A83.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A85.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A84.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzNkNjQtY2Y2ZC00YjIyLTk1MTMtMGQwMWVjMWM1YjE5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewseason-component', littlewSeason);

/* Little Witch Academia s1 video --*/
class littlewvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="#season1">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A85.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A84.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzNkNjQtY2Y2ZC00YjIyLTk1MTMtMGQwMWVjMWM1YjE5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    



     
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BM2Y3MzcyMTgtMzZiNS00MDg2LWIyNGItMWZkMzUwOGMwODYxXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/2.html">
              <div class="box-img">
              <img src="https://i.ytimg.com/vi/BcbXBx3XTeE/maxresdefault.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMGU3ZjBiZDctZjY2OC00OThkLTg3YzUtY2RhNWE4NWU5NGFlXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/4.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZDI4NzYyYjAtMDdkMy00NmRlLThkNTEtOTkwNTYzMGIyODY2XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/5.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZGMxOGU3MzEtNzZlYi00ZjI3LTk5YjMtZDU0ZThiNTc4M2ZlXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/6.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTI2OGVjMzMtMzg1Ni00ZTIwLThkZjktZmU5OTBkNjU0NmM2XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/7.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZDRjNDQ1ZmUtMDVmNi00N2FiLWIzN2ItOThjMmQzYjE1ZjQ3XkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg"
               alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/8.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZTcwNjM2MGItOTkwYS00NmVjLTk5ZTktZWEwNTIxMTVkYWZmXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/9.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYTQzNWFlZDItNGUwOS00MWQ5LWEzYjktNTVjYTJiNjEwOTczXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/10.html">
              <div class="box-img">
              <img src="https://theconartistsblog.files.wordpress.com/2017/03/lwa-ep-10-_00028.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/11.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZjJkYTI0NmItY2U3MC00OTJmLWE3MWEtMTlhODhlMzhkNTNjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg"
               alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/12.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCy2VbTcoxrlZ2kQcB9NwiZTckaxdEv1kOdcjfKQ8E63bWxf7ntGnONDeEDRi5O3dimk&usqp=CAU"
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/13.html">
                  <div class="box-img">
                  <img src="https://rabujoi.files.wordpress.com/2017/04/lwa13c.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 13</h2></div>
                  </a>
              </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/little-witch-academy/s1/14.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYzIzZmFjZjQtZTkwZi00ODFmLWEyZTYtYTA5NGI0YWVhN2ZlXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
              alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 14</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/15.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BZTQxY2FkNzYtNGZlOC00ZWZiLThkMmItNjBlYmY2NDVhZmYyXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 15</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/16.html">
                  <div class="box-img">
                  <img src="https://i.ytimg.com/vi/q1gw25iqagI/maxresdefault.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 16</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/17.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BM2RlMjVlZGQtNmU2Yy00NWFkLWEwMTktZmJjNDQ2YjJlMmJhXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 17</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/18.html">
                  <div class="box-img">
                  <img src="https://lh3.googleusercontent.com/Fp9ovqMYh8WN24dmz76EvTIMn8AaGX8X09M7SwPZsUY0pXo2MEK6aJMOknUBC03IxZqSXmhsH7eOLSnuWgwnZD2mpnFxq4xHukqx=w1920-h1080-no" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 18</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/19.html">
                  <div class="box-img">
                  <img src="https://randomc.net/image/Little%20Witch%20Academia/Little%20Witch%20Academia%20-%2019%20-%20Large%2031.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 19</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/20.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BODE0MWQ1YmEtZWJlOS00NTczLTljYjAtNWIzYzVhYzg0M2QxXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 20</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/21.html">
                  <div class="box-img">
                  <img src="https://www.anime-evo.net/wp-content/uploads/2017/05/WitchTV_21_1-700x385.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 21</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/22.html">
                  <div class="box-img">
                  <img src="https://randomc.net/image/Little%20Witch%20Academia/Little%20Witch%20Academia%20-%2022%20-%20Large%2008.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 22</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/23.html">
                  <div class="box-img">
                  <img src="https://simkl.in/episodes/56/5639002de9d58b21a_w.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 23</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/24.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BYzg5OTZjZGMtMmQ3Ni00NDAxLTllY2UtZmM1NDMyN2ZiZTcyXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 24</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/little-witch-academy/s1/25.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BNjc5NmJmYzUtYTBiYS00YTkwLTk4YjMtMDNmMzk3MGU3MGFiXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_.jpg" 
                  alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 25</h2></div>
                  </a>
              </li>


  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('littlewvideo-component', littlewvideo);

/* Little Witch Academia movie --------------------------------------------------------------------------------------------------------------*/
class littlewmSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A83.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A85.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/Xemphim/little-witch-academy/movie-2/b.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzNkNjQtY2Y2ZC00YjIyLTk1MTMtMGQwMWVjMWM1YjE5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewmseason-component', littlewmSeason);


/* Little Witch Academia movie --------------------------------------------------------------------------------------------------------------*/
class littlewm1Season extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

      <div class="heading">
          <span>Phim liên quan</span>
      </div>
  
  
  <div class="season-content swiper">
      <div class="swiper-wrapper">
      

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A83.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Little Witch Academia</h2></div>
              </a>
      </li>
     
      </div>

      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/Xemphim/little-witch-academy/movie-1/a.html">
          <div class="box-img">
          <img src="https://upload.wikimedia.org/wikipedia/en/7/73/Littlewitchacademiacover.jpeg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 1: Original</h2></div>
              </a>
      </li>
     
      </div>
      
      <!--box1------------------------------------------>
      <div class="swiper-slide">
      <li class="movie-box">
      <a href="/play-page-1/A84.html">
          <div class="box-img">
          <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzNkNjQtY2Y2ZC00YjIyLTk1MTMtMGQwMWVjMWM1YjE5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
      
          <div class="box-text">
              <h2 class="title">Học Viện Phù Thủy Nhỏ</h2>
              <h2 class="title2">Movie 2: Cuộc diễu hành đầy mê hoặc</h2></div>
              </a>
      </li>
     
      </div>
      
    

      

     
  
      
         
  
  
      </div>
      <div class="swiper-scrollbar"></div>
  </div>
  
  
    </section>
      `;
    }
  } 
customElements.define('littlewm1season-component', littlewm1Season);



/* hensuki ---------------------------------------------------------------------*/
class henseason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">

    <div class="heading">
        <span>Phim liên quan</span>
    </div>


<div class="season-content swiper">
    <div class="swiper-wrapper">
    

    <!--box1------------------------------------------>
    <div class="swiper-slide">
    <!--box7--------------------------------------------->
    <li class="movie-box">
        <a href="#season1">
            <div class="box-img">
            <img src="https://ih1.redbubble.net/image.3824876992.2673/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Hensuki</h2>
                <h2 class="title2">"Lọ Lem Quần Lót"</h2></div>
            </a>
        </li>
   
    </div>



    </div>
    <div class="swiper-scrollbar"></div>
</div>
    
    
<!--Video List--------------------------------------------------------------------------------------->

<div class="video-list" id="season2">

    <!--Phim le le Content---------------------------------->
<div class="list-content">

    <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/1.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 1</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/2.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 2</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/3.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 3</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/4.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 4</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/5.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 5</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/6.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 6</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/7.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 7</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/8.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 8</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/9.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 9</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/10.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 10</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/11.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 11</h2></div>
            </a>
        </li>

        <!--box1------------------------------------------>
    <li class="list-box">
        <a href="/Xemphim/hensuki/12.html">
            <div class="box-img">
            <img src="https://img.rgstatic.com/content/show/2e535e15-c1b7-41a1-996a-4ddab2a72712/ad85ae49-47de-44d8-a523-c7e7d8d42b94/113ea9da-c081-4b32-b7f8-c7f8f20d88e6/screenshot-400.jpg" alt="" class="img"></div>
        
            <div class="box-text">
                <h2 class="title">Tập 12</h2></div>
            </a>
        </li>
       
            
    
        


</div>
</div>
</section>

      `;
    }
  } 
customElements.define('henseason-component', henseason);































/* Avatar The last Season --------------------------------------------------------------------------------------------------------------*/
class avatarSeason extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section class="season">
      <h2 class="title">
          <i class='bx bx-list-ul'></i><span>Mùa</span>
      <!--CCCC-->
          <div class="season-list">
              <div class="swiper-wrapper">
                  
                <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s1/1.html">Season 1</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s2/1.html">Season 2</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s3/1.html">Season 3</a></li></div>

                            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </h2>
      <section>
      `;
    }
  } 
customElements.define('avatarseason-component', avatarSeason);

/* Avatar The Last s1 video --*/
class avatarthelastvideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <section class="season">
      <h2 class="title">
          <i class='bx bx-list-ul'></i><span>Mùa</span>
      <!--CCCC-->
          <div class="season-list">
              <div class="swiper-wrapper">
                  
                <div class="swiper-slide">
                      <li><a href="#season1">Season 1</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s2/1.html">Season 2</a></li></div>

                      <div class="swiper-slide">
                      <li><a href="/Xemphim/avatarthelastairbender/s3/1.html">Season 3</a></li></div>

                            
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          </div>
      </h2>
      
      
  <!--Video List--------------------------------------------------------------------------------------->

  <div class="video-list" id="season1">
  
      <!--Phim le le Content---------------------------------->
  <div class="list-content">
  
      <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/1.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYWM2NjM1N2UtYTNmZC00ZDA5LWE3OTktNmZmYmMxNzJiZjdlXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 1</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/2.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTI2ZDcyZmMtZTAyNS00MWM2LTk3ZDctODUzZDk2ZTdjYmRkXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 2</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/3.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYmYxNTViMTUtZjVlMi00OTE2LWJjYzQtN2I0NThjNjUxNjQzXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 3</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/4.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNmU5OGFhZGMtOGM3Ni00MjEzLWJjOGEtMThiOTU0MDBlNWRkXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 4</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/5.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZjJiZDI0ZDUtMDQyZi00Njc4LWJiMjktYTViNjhjMWRkMjhiXkEyXkFqcGdeQXVyMTEzNDQ1MTIy._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 5</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/6.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BYTcyMWZmZGYtZmJiYy00NTBhLWFlMWQtOTYzOTg2NzkxMjJjXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 6</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/7.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiJ9V1ZTsnycT1-bgfxEZa6xB3trbBxo3InaKGrZE5fa5tZ-8Q0fQJ0ImDmNe73o1fuU&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 7</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/8.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BOWM4YzNlNjEtODYzYi00MWEyLTliMmUtYmQxMjUyMDc5ZjcyXkEyXkFqcGdeQXVyNjg5MDA1NjY@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 8</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/9.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BMTk4OTc0NDYyMV5BMl5BanBnXkFtZTgwMjYyMzg3MjE@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 9</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/10.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BOTFmYmI3ZDctZGNjZS00NzkxLWFhOTQtMzMzMzk0MjQzODQ5XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 10</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/11.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZjE1YWQ4OGYtYTRjNC00OGY4LTk0NzgtMzFkMDM4MTQ1NWYxXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 11</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/12.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNTUxYWU1YjQtODE5My00YWUzLTg5ZTUtZmQyOGIxODU0ZTk0XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 12</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/13.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BNjhlZjIzZDctNDljOS00Yzk1LWI4NjEtOGVmYjMyMmY0MWJjXkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 13</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/14.html">
              <div class="box-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyIe4sxfLSF06WfXc4U3ijyESlRrINEPI5Wslfu9_p9MWze71GccmIXpRMSYJWv5aGz4&usqp=CAU" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 14</h2></div>
              </a>
          </li>


          <!--box1------------------------------------------>
      <li class="list-box">
          <a href="/Xemphim/avatarthelastairbender/s1/15.html">
              <div class="box-img">
              <img src="https://m.media-amazon.com/images/M/MV5BZGZmY2YwNWUtNjYyNy00YjU0LWEwM2UtMjk0YjA1MTMyZmEzXkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_.jpg" alt="" class="img"></div>
          
              <div class="box-text">
                  <h2 class="title">Tập 15</h2></div>
              </a>
          </li>

          <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/16.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BNDczZDU2OGYtNWVmMy00ZjQzLTg2MTUtZDQwYjFjN2IzOWE4XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 16</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/17.html">
                  <div class="box-img">
                  <img src="https://cfm.yidio.com/images/tv/946/19785/episode-image-400x225.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 17</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/18.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BM2ZjYTI5YmEtZmQxMy00YTcwLWJkMDMtZGVlMjg5ZDE5ZjE4XkEyXkFqcGdeQXVyNTkyMjE3NDU@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 18</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/19.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BZWEyODY5NDctZGU0ZS00MTFiLTgyNjYtYTExOGYxZDEyYTI1XkEyXkFqcGdeQXVyMjgyOTI4Mg@@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 19</h2></div>
                  </a>
              </li>

              <!--box1------------------------------------------>
          <li class="list-box">
              <a href="/Xemphim/avatarthelastairbender/s1/20.html">
                  <div class="box-img">
                  <img src="https://m.media-amazon.com/images/M/MV5BOTUxMzc0ZmUtYmFjNC00ZDFkLWE5Y2QtN2Y5M2VmOWQ4NThmXkEyXkFqcGdeQXVyOTIzNDcxNDA@._V1_.jpg" alt="" class="img"></div>
              
                  <div class="box-text">
                      <h2 class="title">Tập 20</h2></div>
                  </a>
              </li>



  </div>
  </div>
  </section>
        
      `;
    }
  }
customElements.define('avatarthelastvideo1-component', avatarthelastvideo);
















































































/* Kho phim cho Random --------------------------------------------------------------------------------------------------------------*/
class khophim extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="storage" style="display:none">


    <!--box7--------------------------------------------->
    <div class="movie-box">
        <a href="/play-page-1/A107.html">
            <div class="box-img">
            <img src="https://i.redd.it/nhzhxo7a7ye41.jpg" alt="" class="img">
        
            <div class="top-text">
                <h2 class="title3">Mùa 3</h2></div>
        </div>
        </a>
            <div class="box-text">
                <h2 class="title">Castlevania</h2></div>
            <div class="low-text">
                <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
        </div>

        

        <!--box7--------------------------------------------->
    <div class="movie-box">
        <a href="/play-page-1/A104.html">
            <div class="box-img">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Overlord_II.jpg/220px-Overlord_II.jpg" alt="" class="img">
        
            <div class="top-text">
                <h2 class="title3">Mùa 2</h2></div>
        </div>
        </a>
            <div class="box-text">
                <h2 class="title">Overlord</h2></div>
            <div class="low-text">
                <h2 class="title2">Lạc vào thế giới game</h2></div>
        </div>

        <!--box7--------------------------------------------->
    <div class="movie-box">
        <a href="/play-page-1/A105.html">
            <div class="box-img">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/Overlord_III.jpg" alt="" class="img">
        
        
            <div class="top-text">
                <h2 class="title3">Mùa 3</h2></div>
        
        </div>
        </a>
            <div class="box-text">
                <h2 class="title">Overlord</h2></div>
            <div class="low-text">
                <h2 class="title2">Lạc vào thế giới game</h2></div>
        </div>

       <!--box7--------------------------------------------->
    <div class="movie-box">
        <a href="/play-page-1/A113.html">
            <div class="box-img">
            <img src="https://cdn.myanimelist.net/images/anime/7/56643.jpg" alt="" class="img">
            <div class="top-text">
                <h2 class="title3">Mùa 2</h2></div>
        </div>
        </a>
            <div class="box-text">
                <h2 class="title">Chuunibyou Demo</h2></div>
            <div class="low-text">
                <h2 class="title2">Koi Ga Shitai!</h2></div>
        </div>

    <!--box2------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A102.html">
                    <div class="box-img">
                    <img src="https://ecdn.game4v.com/g4v-content/uploads/2021/10/20074532/Mob-100-1-game4v-1634690731-11.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 3</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>  

    <!--box7--------------------------------------------->
    <div class="movie-box">
        <a href="/play-page-1/A109.html">
            <div class="box-img">
            <img src="https://photo2.tinhte.vn/data/attachment-files/2021/02/5338950_Gotoubun-no-Hanayome-ss2.jpg" alt="" class="img">
        
        
            <div class="top-text">
                <h2 class="title3">Mùa 2</h2></div>
        
        </div>
        </a>
            <div class="box-text">
                <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
            <div class="low-text">
                <h2 class="title2">Gotōbun no Hanayome</h2></div>
        </div>


    <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A106.html">
                    <div class="box-img">
                    <img src="https://i.pinimg.com/564x/90/00/90/900090378ddc64e7c0a7089f0ae36217.jpg" alt="" class="img">
                
                    <div class="top-text">
                        <h2 class="title3">Mùa 2</h2></div>
                </div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Castlevania</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                </div>


    <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A1.html"> 
                    <div class="box-img">
                    <img src="/img/jujusukaisen/1.png" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Jujutsu Kaisen</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thuật Hồi Chiến</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A2.html">
                    <div class="box-img">
                    <img src="/img/spidermanacrossspiderverse/1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Spider Man</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Across The Spider Verse</h2></div>
                </div>    

            <!--box2------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A3.html">
                    <div class="box-img">
                    <img src="/img/mob100/2.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mob psycho 100</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cậu Bé Siêu Năng Lực</h2></div>
                </div>    

            


            <!--box5-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A5.html">
                    <div class="box-img">
                    <img src="/img/pussin bôt/1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Puss in Boots</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Last Wish</h2></div>
                </div>    

            <!--box1------------------------------------------>
            <div class="movie-box">
            <a href="/play-page-1/A6.html">
                <div class="box-img">
                <img src="https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Monsters vs Aliens</h2></div>
                <div class="low-text">
                    <h2 class="title2">(2009)</h2></div>
            </div>

        <!--box7--------------------------------------------->
        <div class="movie-box">
            <a href="/play-page-1/A7.html">
                <div class="box-img">
                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Kung_fu_panda_poster.jpg/220px-Kung_fu_panda_poster.jpg" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Kung Fu Panda</h2></div>
                <div class="low-text">
                    <h2 class="title2">Gấu Trúc KungFu</h2></div>
            </div>
            
        <!--box6-------------------------------------------->
            <div class="movie-box">
            <a href="/play-page-1/A8.html">
                <div class="box-img">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/adventuretime.png" alt="" class="img"></div>
            </a>
                <div class="box-text">
                    <h2 class="title">Adventure Time</h2></div>
                <div class="low-text">
                    <h2 class="title2">Giờ Phiêu Lưu</h2></div>
            </div>

        <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A9.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Knives out</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Đâm Lén</h2></div>
                </div>

        <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A10.html">
                    <div class="box-img">
                    <img src="https://www.cgv.vn/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/m/a/matrix1999_-_poster-revised.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Matrix</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Ma Trận</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A11.html">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p9248224_b_v8_ax.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Gravity Fall</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thị Trấn Bí Ẩn</h2></div>
                </div>

                <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A12.html">
                    <div class="box-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR495Zels6q1YP1FT1OxEz_IuD0rPDQYcdxx0FHItkoHn-y7aiMykDUTEJaQ87G_ZLusVs&usqp=CAU" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Angry Birds</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A13.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Tangled</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Người Đẹp Tóc Mây</h2></div>
                </div>

                <!--box1------------------------------------------>
                <div class="movie-box">
                    <a href="/play-page-1/A14.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTk4Mjk0Mzg4OV5BMl5BanBnXkFtZTcwMTg4NzYwMw@@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Fantastic Mr Fox</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Gia Đình Nhà Cáo</h2></div>
                    </div>

                <!--box2------------------------------------------>
                <div class="movie-box">
                    <a href="/play-page-1/A15.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Pacific Rim</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Siêu Đại Chiến</h2></div>
                    </div>
                   

                <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A17.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Spider Man</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Into The Spider Verse</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A18.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ready player one</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Đấu Trường Ảo</h2></div>
                </div>

            <!--box3------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A19.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTczODUzNDctODFkZS00M2E4LTllNDEtYWJiOWRlMjE2ZmYzXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vampire Hunter D</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Bloodlust</h2></div>
                </div>

                

                <!--box5-------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A21.html">
                        <div class="box-img">
                        <img src="https://i.mpcdn.top/poster/cao-gia-gian-ac-va-nhung-cau-chuyen-khac-6230.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">The Big Bad Fox</h2></div>
                        <div class="low-text">
                            <h2 class="title2">and Other Tales</h2></div>
                    </div>

                <!--box6-------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A22.html">
                        <div class="box-img">
                        <img src="https://play-lh.googleusercontent.com/mPinn5OgOMiYDLihQpgrYwzDi0Nonqr81EU74_l9aQTxdegGf57Ed07CCG9zse1A6jr9Idb10UB7kAd8I5zg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Resident evil </h2></div>
                        <div class="low-text">
                            <h2 class="title2">Death Island</h2></div>
                    </div>

                

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A24.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Prince Mononoke</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Công Chúa Mononoke</h2></div>
                </div>

            <!--box4-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A25.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNjFmNWYzZjMtYWIyZi00NDVmLWIxY2EtN2RiMjZiMDk4MzcyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Akira</h2></div>
                    <div class="low-text">
                        <h2 class="title2">(Siêu Phẩm Anime)</h2></div>
                </div>

            <!--box5-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A26.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTJhYjI1N2ItM2E4MC00ZmYzLTk2YzYtNTE5YTM1MDU0NjRiXkEyXkFqcGdeQXVyMTMxNjYyMTgw._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Heart of Stone</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Trái Tim Sắt Đá</h2></div>
                </div>

            <!--box6-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A27.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Super Mario Bros</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Anh em Mario</h2></div>
                </div>


            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A29.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Corpse Bride</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cô Dâu Ma</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A30.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Vệ Thần Trỗi Dậy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Rise Of The Guardians</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A31.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Bí Kíp Luyện Rồng</h2></div>
                    <div class="low-text">
                        <h2 class="title2">How To Train Your Dragon</h2></div>
                </div>

            <!--box1------------------------------------------>
            <div class="movie-box">
                <a href="/play-page-1/A32.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Big Hero 6</h2></div>
                    <div class="low-text">
                        <h2 class="title2">6 Đại Anh Hùng</h2></div>
                </div>


            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A35.html">
                    <div class="box-img">
                    <img src="/img/madagascar/11.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Madagascar</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tẩu Thoái Tới Madagascar</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A36.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYTMyZjUwNjktYjUzNC00YzNhLWI4YzQtMmRhZjJhZDEwYmUyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Boy, The Mole</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Fox and The Horse</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A37.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTM5ZDJiMjctZDE1ZS00MmYyLTkwNDQtOWRiNWRkNDhjMWEyXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Miss Kobayashi's</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Dragon Maid</h2></div>
                </div> 

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A38.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMzUyMDYxMzctM2QzYi00YTYyLThhYjMtMGM2ZjM5N2UwY2JkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Summer Wars</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cuộc Chiến Mùa Hè</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A39.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNzk4MjhhMjEtODM5Zi00ZTJkLWIxY2UtMmYyYzY1N2Y3Zjc0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Ernest & Celestine</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Tình Bạn Gấu và Chuột</h2></div>
                </div>

            
            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A40.html">
                    <div class="box-img">
                    <img src="/img/justice league/doom/1.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Justice League</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Doom</h2></div>
                </div>
            

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A42.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/71OUeTtTU6L.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Despicable Me</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Mặt Trăng</h2></div>
                </div>

                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A43.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BZGVmNzNmMjEtZTBjYi00ODExLTkwMWEtMzJjYzk0MTE2YmY5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Vampire Hunter D</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Thợ Săn Ma Cà Rồng D</h2></div>
                    </div>
                   
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A45.html">
                        <div class="box-img">
                        <img src="https://i.pinimg.com/originals/d0/82/84/d08284cf9e6232b9641ac5ee2539e1c7.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Warcraft</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Đại Chiến Hai Thế Giới</h2></div>
                    </div>
    
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A46.html">
                        <div class="box-img">
                        <img src="https://www.themoviedb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Ponyo</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Nàng Tiên Cá Phương Đông</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A51.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTE2YzljYzAtMzRlMi00ZmY1LThiMTMtZGQ3OTI3MTNmOWI2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Madagascar 2</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Tẩu Thoát Khỏi Châu Phi</h2></div>
                    </div>
    
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A59.html">
                        <div class="box-img">
                        <img src="https://gamek.mediacdn.vn/133514250583805952/2021/6/14/ai1-162364252473619543405.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Jujutsu Kaisen 0</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Chú Thuật Hồi Chiến 0</h2></div>
                    </div>
    
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A60.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Kung Fu Panda 2</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Gấu Trúc KungFu 2</h2></div>
                    </div> 
    
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A61.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTUyNzgxNjg2M15BMl5BanBnXkFtZTgwMTY1NDI1NjE@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Kung Fu Panda 3</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Gấu Trúc KungFu 3</h2></div>
                    </div> 
    
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A62.html">
                        <div class="box-img">
                        <img src="https://ocwckgy6c1obj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_the-angry-birds-movie-2_poster_2.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Angry Birds 2</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Những Chú Chim Giận Dữ</h2></div>
                    </div>
    
                    <!--box1------------------------------------------>
    <div class="movie-box">
        <a href="/play-page-1/A34.html">
            <div class="box-img">
            <img src="https://malaysubtitle.com/wp-content/uploads/2022/03/Harry-Potter-and-the-Sorcerers-Stone-2001-Malay-Subtitle.jpg" alt="" class="img"></div>
        </a>
            <div class="box-text">
                <h2 class="title">Harry Potter</h2></div>
            <div class="low-text">
                <h2 class="title2">và Hòn Đá Phù Thủy</h2></div>
        </div>
    
                    <!--box4-------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A20.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtNzM5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Dungeon & Dragon</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Danh Dự Của Kẻ Trộm</h2></div>
                </div>
    
                <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A47.html">
                        <div class="box-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0kF6xbcUmZohKXa0NgckY77jTuvosCMeDDXbGdVym-GLkXu-a7i6PFudx46auzJR75M&usqp=CAU" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Castlevania</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lâu Đài Ma Cà Rồng</h2></div>
                    </div>
    
                    
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A44.html">
                        <div class="box-img">
                        <img src="https://musicart.xboxlive.com/7/a9355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Overlord</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lạc Vào Thế Giới Game</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A48.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMDY1ZDkyZTktMGIyMy00OWFlLWE5YzYtYzBjYjQzZGMyZDIxXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Dragon Age</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Absolution</h2></div>
                    </div>
    
                     <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A57.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/7/79/Devil_May_Cry_Anime_Cover.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Devil May Cry</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Ma Quỷ Cũng Phải Khóc</h2></div>
                    </div> 
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A63.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/19/Bayonetta_Bloody_Fate_poster.png" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Bayonetta</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Blood Fate</h2></div>
                    </div> 
    
                     <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A64.html">
                        <div class="box-img">
                        <img src="https://pics.filmaffinity.com/Overlord-855085317-large.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Overlord</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Chiến Dịch Overlord</h2></div>
                    </div> 
    
                     <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A67.html">
                        <div class="box-img">
                        <img src="https://musicart.xboxlive.com/7/4c4f5700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Good Will Hunting</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Chàng Will Tốt Bụng</h2></div>
                    </div> 
    
                     <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A65.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BYjYzOTExMzItYmY0Ni00NmQ1LWI3MTMtYzhhOTA0Yzk3YjllXkEyXkFqcGdeQXVyMTY1MTcxMzc@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Vệ Sĩ Sát Thủ</h2></div>
                        <div class="low-text">
                            <h2 class="title2">The Hitman's Bodyguard</h2></div>
                    </div> 
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A66.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGIzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">SuperBad</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Siêu Tệ Hại</h2></div>
                    </div> 
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A68.html">
                        <div class="box-img">
                        <img src="https://s198.imacdn.com/ff/2023/09/01/346eda80c0c1c96c_b7a995db50578395_54254169358078523.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Ninja Rùa</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Hỗn Loạn Tuổi Dậy Thì</h2></div>
                    </div> 
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A50.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/en/0/01/Shaun_the_Sheep_MoviePoster.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Shaun the Sheep</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Cừu Quê Ra Phố</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A55.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Toy Story</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Câu Chuyện Đồ Chơi</h2></div>
                    </div>
    
                    
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A69.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/f8/B%C3%ACa_nh%C3%A2n_v%E1%BA%ADt_anime_Go-T%C5%8Dbun_no_Hanayome.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Gotōbun no Hanayome</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A94.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BZGZlOTcxZWItZDA3Yy00ZDNhLTllZjktMTVhZjQzZDkxNTYxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Nhà Có 5 Nàng Dâu</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Movie</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A70.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDU5OTU3NmItZTQ1MC00MjI0LWIwMDUtNmNiZDAwNDAxNTI1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Witch Craft Works</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Phù Thủy Thời Hiện Đại</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A71.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BODg1YTRlMGUtYTFlYS00ODRmLTk4ZTktNjIyNWUxMDg1MjBjXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Burn The Witch</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Đốt Cháy Phù Thủy</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A72.html">
                        <div class="box-img">
                        <img src="https://img.aullidos.com/imagenes/caratulas/justice-league-crisis-two-earths.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Justice League</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Crisis On Two Earths</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A73.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/I/812O1op64AL._AC_UF894,1000_QL80_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Howl Moving Castle</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Lâu Đài Di Động Của Howl</h2></div>
                    </div>
                   
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A74.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDdiZGE0N2EtNTMxMy00NDVjLTg0MDktYmE0ZTA4MmMyODM1XkEyXkFqcGdeQXVyMTUyMzg5NzM2._V1_FMjpg_UX1000_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">One More Time</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Sống Lại Tuổi 18</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A75.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/f2/Ryu_to_Sobakasu_no_Hime_poster.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Belle</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Công Chúa Tàn Nhang</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A76.html">
                        <div class="box-img">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/a/a2/Ch%C5%ABniby%C5%8D_Demo_Koi_ga_Shitai%21_volume_1_cover.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Chuunibyou Demo</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Koi Ga Shitai!</h2></div>
                    </div>
    
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A77.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BOGRlNTllMmYtNTcyYy00MGJjLWFiY2UtMDE2NWY3ZmRkNjhmXkEyXkFqcGdeQXVyMzU3MDU3NjI@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Rikka Version</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Tuổi mói lớn mộng mơ</h2></div>
                    </div>
    
                    <!--box7--------------------------------------------->
                <div class="movie-box">
                    <a href="/play-page-1/A95.html">
                        <div class="box-img">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTFlODViNGItYjZhYy00NzVlLTgwYTUtNGZhODg3NzEyN2Y2XkEyXkFqcGdeQXVyMzA1MjMyNTY@._V1_.jpg" alt="" class="img"></div>
                    </a>
                        <div class="box-text">
                            <h2 class="title">Take On Me</h2></div>
                        <div class="low-text">
                            <h2 class="title2">Tuổi Mới Lớn Mộng Mơ</h2></div>
                    </div>

                    <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A78.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDI4MGEwZDAtZDg0Yy00MjFhLTg1MjctODdmZTMyNTUyNDI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Paprika</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Kẻ Cắp Giấc Mơ</h2></div>
                </div>

               <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A80.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZjFkNWZjNGYtNzlkOS00NGZmLWE5ODQtMzNjNTY4YTU1MzVlXkEyXkFqcGdeQXVyNzA3ODUyNzY@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Cô Gái Ngoại Tộc</h2></div>
                    <div class="low-text">
                        <h2 class="title2">The Girl From the Other Side</h2></div>
                </div>
               

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A81.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f0/Josee%2C_the_Tiger_and_the_Fish_2020_film_poster.jpg/220px-Josee%2C_the_Tiger_and_the_Fish_2020_film_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Josee</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Khi Nàng Thơ Yêu</h2></div>
                </div>


                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A82.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BOWE4YzE3Y2MtYzIyZS00NjA4LTliMDgtY2U0NGM2NzI4MjZlXkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Peter Rabbit</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Thỏ Peter</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A83.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/I/91cXHMWJ2eL._AC_UF1000,1000_QL80_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Little Witch Academia</h2></div>
                </div>

            <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A84.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzNkNjQtY2Y2ZC00YjIyLTk1MTMtMGQwMWVjMWM1YjE5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Học Viện Phù Thủy</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Cuộc Diễu Hành Mê Hoặc</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A86.html">
                    <div class="box-img">
                    <img src="https://flxt.tmsimg.comstatics/p35599_v_v10_ac.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Robots</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Thành Phố Robot</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A87.html">
                    <div class="box-img">
                    <img src="https://ih1.redbubble.net/image.3824876992.2673/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Hensuki</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Lọ Lem Quần Lót</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A88.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Chicken Run</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Phi Đội Gà Bay</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A89.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/9/9b/Porco_Rosso_poster.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Porco Rosso</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Chú Heo Màu Đỏ</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A90.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">The Iron Giant</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Người Khổng Lồ Sắt</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A91.html">
                    <div class="box-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTc3NDc4MjU2NV5BMl5BanBnXkFtZTcwNzY4NjUyMQ@@._V1_.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Mighty Morphin</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Power Ranger</h2></div>
                </div>

                <!--box7--------------------------------------------->
            <div class="movie-box">
                <a href="/play-page-1/A79.html">
                    <div class="box-img">
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Promare_Key_Visual.jpg" alt="" class="img"></div>
                </a>
                    <div class="box-text">
                        <h2 class="title">Promare</h2></div>
                    <div class="low-text">
                        <h2 class="title2">Giao Thức Promare</h2></div>
                </div>
                
</section>
    `;
  }
} 
customElements.define('khophim-component', khophim);







/* active next page */
const navLinkc = document.querySelectorAll('.relate-content .relate-list li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })

/* active next page */
const navLinko = document.querySelectorAll('.season .season-content li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })

/* active next page */
const navLinkp = document.querySelectorAll('.season-content2 .season2-list li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  })



const navLinkq = document.querySelectorAll('.season .season-list li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

const navLinkz = document.querySelectorAll('.video-list .list-content li a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
})



var swiper = new Swiper(".season-content", {
    slidesPerView: 4,

    scrollbar: {
      el: ".swiper-scrollbar",
    },

  });


/* Popular Swiper */
var swiper = new Swiper(".popular-content", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 10.5,
  autoplay: {
    delay: 2200,
    
    disableOnInteraction: false,
  },
  
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/* Popular Swiper */
var swiper = new Swiper(".popularphone-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,
    autoplay: {
      delay: 2200,
      
      disableOnInteraction: false,
    },
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/* Phimle Swiper */
var swiper = new Swiper(".phimle-content", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10.5,
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* Phimle Swiper */
var swiper = new Swiper(".phimle2-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,
    
    navigation: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/* phim bo Swiper */
var swiper = new Swiper(".phimbo-content", {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10.5,

    autoplay: {
        delay: 2100,
        
        disableOnInteraction: false,
      },

  });

  /* phim bo Swiper */
var swiper = new Swiper(".phimbo2-content", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10.5,

    autoplay: {
        delay: 2100,
        
        disableOnInteraction: false,
      },

  });

  

/* Popular2 Swiper */
var swiper = new Swiper(".popular-content2", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
  });

 /* Void Swiper */
var swiper = new Swiper(".void-content", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    autoplay: {
      delay: 122000,
      
      disableOnInteraction: false,
    },
    
  });



/* Number Page */
var swiper = new Swiper(".pagenumber-content", {
  slidesPerView: 3,
  spaceBetween: 1,
  
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








/* video */
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');

let mainiframe = document.querySelector('.main-video iframe');

let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
  video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('active'));
    video.classList.add('active');
    if(video.classList.contains('active')){
      let src = video.children[0].getAttribute('src');
      mainVideo.src = src;
    let text = video.children[1].innerHTML;
    title.innerHTML = text;
    
  };
  };
});

listVideo.forEach(iframe =>{
  iframe.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('active'));
    iframe.classList.add('active');
    if(iframe.classList.contains('active')){
      let src = iframe.children[0].getAttribute('src');
      mainiframe.src = src;
    let text = iframe.children[1].innerHTML;
    title.innerHTML = text;
    
  };
  };
});


/* Random */
movies = document.querySelectorAll('.movie-box');

random1 = document.querySelector('.random1');
random2 = document.querySelector('.random2');
random3 = document.querySelector('.random3');
random4 = document.querySelector('.random4');
random5 = document.querySelector('.random5');
random6 = document.querySelector('.random6');


for (let i=0; i< 550 ; i++) {  
    var random = Math.floor(Math.random()*movies.length);
    random1.innerHTML = movies[random] .innerHTML;
}

for (let i=0; i< 550 ; i++) {  
    var number = Math.floor(Math.random()*movies.length);
    random2.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 550 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random3.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 550 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random4.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 500 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random5.innerHTML = movies[number].innerHTML;
}

for (let i=0; i< 560 ; i++) {  
  var number = Math.floor(Math.random()*movies.length);
  random6.innerHTML = movies[number].innerHTML;
}




/* show hidden */
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}


/* SEARCH */
let search = document.getElementById('search');
let search_result = document.getElementsByClassName('search_result')[0];

window.addEventListener('load', () => {
    movie.forEach(element => {
        const { img, title, year, url } = element;
        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content">
            <h2>${title}</h2>
            <p>${year}</p>
        </div>`;
        search_result.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toLowerCase();
    let a = search_result.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content')[0];
        let c = b.getElementsByTagName('h2')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_result.style.visibility ="visible";
            search_result.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_result.style.visibility ="hidden";
            search_result.style.opacity = 0;
        }
    }
})



//movie box set

const movie = [
  
  {
    id: 43,
    img: "https://www.themoviedb.org/t/p/w780/1zs8iKZMKrtIh2MulIwwU6Gs9EK.jpg",
    title: "Vampire Hunter D<br>Thợ săn ma cà rồng",
    letter: "v",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1985,
    rate: 7.3,
    url: "/play-page-1/A43.html",
    msot: "movie"
  },

  {
    id: 42,
    img: "https://image.tmdb.org/t/p/w1280//euCnMxNRlHNxA4f9BMnWbmxPOse.jpg",
    title: "Despicable me<br>Tôi ti tiện",
    letter: "d",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2003,
    rate: 7.3,
    url: "/play-page-1/A42.html",
    msot: "movie"
  },

  {
    id: 41,
    img: "https://www.awn.com/sites/default/files/styles/original/public/image/featured/lastairbender-1280.jpg?itok=YwJieyrG",
    title: "Avatar: The Last Airbender",
    letter: "a",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "/play-page-1/A41.html",
    msot: "movie"
  },

  {
    id: 40,
    img: "https://images.hdqwalls.com/wallpapers/justice-league-doom-sl.jpg",
    title: "Justice League-Doom<br>Liên minh công lý",
    letter: "j",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "/play-page-1/A40.html",
    msot: "movie"
  },

  {
    id: 39,
    img: "https://gkids.com/wp-content/uploads/2018/06/ernest_hires_1.jpg",
    title: "ernest & celestine<br> Tình bạn Gấu và Chuột",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "/play-page-1/A39.html",
    msot: "movie"
  },

  {
    id: 38,
    img: "https://hanayukichan.files.wordpress.com/2016/01/summer-wars-promotional-poster.jpg?w=1200",
    title: "Summer Wars<br>Cuộc chiến mùa hè",
    letter: "c",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2009,
    rate: 7.3,
    url: "/play-page-1/A38.html",
    msot: "movie"
  },

  {
    id: 37,
    img: "https://static.lag.vn/upload/news/20/08/10/Kobayashi-san_Chi_no_Maid_Dragon-1_PXET.jpg?w=800&encoder=wic&subsampling=444",
    title: "Miss Kobayashi's Dragon Maid<br>Hầu gái rồng nhà Kobayashi",
    letter: "d",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2017,
    rate: 7.3,
    url: "/play-page-1/A37.html",
    msot: "movie"
  },

  {
    id: 36,
    img: "https://img.phimmoichillg.net/images/film/cau-be-chuot-chui-cao-va-ngua.jpg",
    title: "Cậu Bé, Chuột Chũi,<br>Cáo Và Ngựa",
    letter: "C",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2022,
    rate: 7.3,
    url: "/play-page-1/A36.html",
    msot: "movie"
  },

  {
    id: 35,
    img: "https://visada.me/wp-content/uploads/2023/06/55353-35717.webp",
    title: "Madagascar",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "/play-page-1/A35.html",
    msot: "movie"
  },

  {
    id: 34,
    img: "https://danhkhoireal.vn/wp-content/uploads/2023/06/harry-potter-va-hon-da-phu-thuy-1.jpg",
    title: "Harry Potter<br>và Hòn đá Phù thủy",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2001,
    rate: 7.3,
    url: "/play-page-1/A34.html",
    msot: "movie"
  },

  {
    id: 33,
    img: "https://m.media-amazon.com/images/M/MV5BMjMxOTU2MDI5OV5BMl5BanBnXkFtZTgwODUwNjgzMDI@._V1_.jpg",
    title: "Trolls<br>Quỷ lùn tinh nghịch",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2016,
    rate: 7.3,
    url: "/play-page-1/A33.html",
    msot: "movie"
  },

  {
    id: 32,
    img: "https://cdn.vox-cdn.com/thumbor/76VmDKMiwJ6V3XMBLxnkwz9pxGs=/62x0:1862x1350/1400x788/filters:focal(62x0:1862x1350):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/44274110/big-hero-6.0.0.jpg",
    title: "Big Hero 6<br>6 đại anh hùng",
    letter: "b",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "/play-page-1/A32.html",
    msot: "movie"
  },

  {
    id: 31,
    img: "https://static01.nyt.com/images/2010/03/26/movies/26dragonspan-1/26dragonspan-1-articleLarge.jpg",
    title: "How to train your dragon<br>Bí kíp luyện rồng",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2003,
    rate: 7.3,
    url: "/play-page-1/A31.html",
    msot: "movie"
  },

  {
    id: 30,
    img: "https://ichef.bbci.co.uk/images/ic/1200x675/p07xpf6l.jpg",
    title: "Rise of the guardians<br>Sự trỗi dậy của các Vệ thần",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2012,
    rate: 7.3,
    url: "/play-page-1/A30.html",
    msot: "movie"
  },

  {
    id: 29,
    img: "https://m.media-amazon.com/images/M/MV5BOTI0MjI5NzQ1MF5BMl5BanBnXkFtZTcwNTgwNzgyMw@@._V1_.jpg",
    title: "Corpse Bride<br>Cô dâu ma",
    letter: "c",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2005,
    rate: 7.3,
    url: "/play-page-1/A29.html",
    msot: "movie"
  },


  {
    id: 28,
    img: "https://media.vov.vn/sites/default/files/styles/large/public/2021-01/tom_-_jerry.jpg",
    title: "Tom và Jerry<br>Collection",
    letter: "t",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1940,
    rate: 7.3,
    url: "/play-page-1/A28.html",
    msot: "movie"
  },

  {
    id: 27,
    img: "https://m.media-amazon.com/images/M/MV5BYjMxOWJjNzUtYzVjYS00NGNlLWI1YWQtMDk3MWZlZDU4OWFkXkEyXkFqcGdeQWpnYW1i._V1_QL75_UY281_CR0,0,500,281_.jpg",
    title: "Super Mario Bros<br>Anh em Mario",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "/play-page-1/A27.html",
    msot: "movie"
  },

  {
    id: 26,
    img: "https://ntvb.tmsimg.comstatics/p23905086_v_h8_aa.jpg?ihspl",
    title: "Heart of Stone<br>Trái tim sắt đá",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "/play-page-1/A26.html",
    msot: "movie"
  },

  {
    id: 25,
    img: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a2b3029e9cce3ba587f3f499baa3d611.jpe",
    title: "Akira",
    letter: "a",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1988,
    rate: 7.3,
    url: "/play-page-1/A25.html",
    msot: "movie"
  },

  {
    id: 24,
    img: "https://static2.yan.vn/YanNews/2167221/201810/previewmedium-845620e0.jpg",
    title: "Princess Mononoke<br>Công chúa Mononoke",
    letter: "m",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 1997,
    rate: 7.3,
    url: "/play-page-1/A24.html",
    msot: "movie"
  },

  {
    id: 23,
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/A99C/production/_119702434_hotfuzz_swam_alamy.jpg",
    title: "Hot Fuzz<br>Siêu Cớm",
    letter: "h",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2007,
    rate: 7.3,
    url: "/play-page-1/A23.html",
    msot: "movie"
  },

  {
    id: 22,
    img: "https:/statics-prd.ignimgs.com/2023/07/26/re-death-island-1690379861492.jpg",
    title: "Resident Evil<br>Death Island",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "/play-page-1/A22.html",
    msot: "movie"
  },

  {
    id: 21,
    img: "https://m.media-amazon.com/images/M/MV5BZGNlMDk1N2QtZjE4Ni00Yjg5LWEwY2EtMTBmZDkzODNhNTNhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    title: "Sói già gian ác<br>và những câu chuyện khác",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2017,
    rate: 7.3,
    url: "/play-page-1/A21.html",
    msot: "movie"
  },

  {
    id: 20,
    img: "https://images.thedirect.com/media/article_full/dungeons-and-dragons-honor-among-thieves-cast-characters.jpg",
    title: "Ngục tối và rồng<br>Danh dự của kẻ trộm",
    letter: "n",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2023,
    rate: 7.3,
    url: "/play-page-1/A20.html",
    msot: "movie"
  },


  {
    id: 19,
    img: "https://onderhond.com/img/movies/vampire-hunter-d-bloodlust.png",
    title: "Vampire Hunter D: Bloodlust<br>Thợ săn ma cà rồng: Khát máu",
    letter: "V",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2000,
    rate: 7.3,
    url: "/play-page-1/A19.html",
    msot: "movie"
  },

  {
    id: 18,
    img: "https://genk.mediacdn.vn/2018/3/31/photo-1-15224620607731943989009.jpeg",
    title: "Ready Player One<br>Đấu trường ảo",
    letter: "r",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2018,
    rate: 7.3,
    url: "/play-page-1/A18.html",
    msot: "movie"
  },

  {
    id: 17,
    img: "https://s3.cloud.cmctelecom.vn/tinhte1/2018/12/4516214_Tinhte_Spider7.jpg",
    title: "Spider man into the spider verse<br>Người nhện: Vũ trụ mới",
    letter: "s",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2018,
    rate: 7.3,
    url: "/play-page-1/A17.html",
    msot: "movie"
  },

  {
    id: 16,
    img: "https://cosmicbook.news/wp-content/uploads/2022/07/new-look-predator-prey.jpg",
    title: "Prey<br>Quái Thú Vô Hình: Con Mồi",
    letter: "p",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2022,
    rate: 7.3,
    url: "/play-page-1/A17.html",
    msot: "movie"
  },

  {
    id: 15,
    img: "https://im.ziffdavisinternational.com/ign_ap/screenshot/a/awesome-new-pacific-rim-promotional-poster-unveile/awesome-new-pacific-rim-promotional-poster-unveile_xrwd.jpg",
    title: "Pacific Rim<br>Siêu đại chiến",
    letter: "p",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "/play-page-1/A15.html",
    msot: "movie"
  }, 

  {
    id: 14,
    img: "https://material.asset.catchplay.com/NEW-ID-001-A1024/artworks/posters/NEW-ID-001-A1024-P1200.jpg?hash=1684316446",
    title: "Fantastic Mr Fox<br>Gia đình nhà cáo",
    letter: "f",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2009,
    rate: 7.3,
    url: "/play-page-1/A14.html",
    msot: "movie"
  },  



  {
    id: 13,
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/12B94BA855A62BAD0B33230569EF97050344972D1C0F34713A29A35643E54081/scale?width=1200&aspectRatio=1.78&format=jpeg",
    title: "Tangled<br>Người đẹp tóc mây",
    letter: "T",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2010,
    rate: 7.3,
    url: "/play-page-1/A13.html",
    msot: "movie"
  },  
  
  
  {
    id: 12,
    img: "https://playandgo.com.au/wp-content/uploads/2016/04/AB_Launch_PP_Quad_Date-630x474.jpg",
    title: "Angry birds movie<br>Những chú chim giận dữ",
    letter: "A",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2016,
    rate: 7.3,
    url: "/play-page-1/A12.html",
    msot: "movie"
  },

  {
  id: 11,
    img: "https://static1.dienanh.net/upload/202108/56c3343a-67e0-4f79-a741-6a0f1a3b7883.jpg",
    title: "Gravity Fall<br>Thị Trấn Bí Ẩn",
    letter: "g",
    genre1: "none",
    genre2: "none",
    genre3: "none",
    genre4: "none",
    genre5: "none",
    genre6: "none",
    genre7: "none",
    year: 2014,
    rate: 7.3,
    url: "/play-page-1/A11.html",
    msot: "movie"
  },

  {
    id: 10,
      img: "https://toplist.vn/images/800px/ma-tran-470978.jpg",
      title: "The Matrix<br>Ma Trận",
      letter: "M",
      genre1: "none",
      genre2: "none",
      genre3: "none",
      genre4: "none",
      genre5: "none",
      genre6: "none",
      genre7: "none",
      year: 1999,
      rate: 7.3,
      url: "/play-page-1/A10.html",
      msot: "movie"
    },

    {
      id: 9,
        img: "https://i0.wp.com/thequeerreview.com/wp-content/uploads/2019/11/image-asset.jpeg?fit=1000%2C563&ssl=1",
        title: "Knives out<br>Kẻ đâm lén",
        letter: "k",
        genre1: "none",
        genre2: "none",
        genre3: "none",
        genre4: "none",
        genre5: "none",
        genre6: "none",
        genre7: "none",
        year: 2019,
        rate: 7.3,
        url: "/play-page-1/A9.html",
        msot: "movie"
      },

      {
        id: 8,
          img: "https://upload.wikimedia.org/wikipedia/vi/3/37/Adventure_Time_-_Title_card.png",
          title: "Adventure Time<br>Giờ Phiêu Lưu",
          letter: "A",
          genre1: "none",
          genre2: "none",
          genre3: "none",
          genre4: "none",
          genre5: "none",
          genre6: "none",
          genre7: "none",
          year: 2010,
          rate: 8.7,
          url: "/play-page-1/A8.html",
          msot: "movie"
        },

        {
          id: 7,
            img: "https://www.toomva.com/tai-lieu/uploadtvcu/kungfu-panda-1-phu-de.jpg",
            title: "Kung Fu Panda<br>Gấu Trung Kung Fu",
            letter: "k",
            genre1: "none",
            genre2: "none",
            genre3: "none",
            genre4: "none",
            genre5: "none",
            genre6: "none",
            genre7: "none",
            year: 2008,
            rate: 7.3,
            url: "/play-page-1/A7.html",
            msot: "movie"
          },

          {
            id: 6,
              img: "https://a.ltrbxd.com/resized/sm/upload/a9/kn/hb/qs/monsters-vs-aliens-70-1200-1200-675-675-crop-000000.jpg?v=051409c691",
              title: "Monsters vs Aliens<br>Quái Vật vs Người ngoài hành tinh",
              letter: "M",
              genre1: "none",
              genre2: "none",
              genre3: "none",
              genre4: "none",
              genre5: "none",
              genre6: "none",
              genre7: "none",
              year: 2009,
              rate: 6.5,
              url: "/play-page-1/A6.html",
              msot: "movie"
            },

            {
              id: 5,
                img: "https://www.hollywoodreporter.com/wp-content/uploads/2022/11/Puss-in-Boots-The-Last-Wish-Everett-H-2022.jpg?w=1296",
                title: "Puss in Boots 2<br>Mèo đi hia: Điều ước cuối cùng",
                letter: "P",
                genre1: "none",
                genre2: "none",
                genre3: "none",
                genre4: "none",
                genre5: "none",
                genre6: "none",
                genre7: "none",
                year: 2023,
                rate: 9.0,
                url: "/play-page-1/A5.html",
                msot: "movie"
              },

              {
                id: 4,
                  img: "https://occ-0-2433-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg?r=0e5",
                  title: "One Punch Man<br>Anh hùng phồng tôm",
                  letter: "o",
                  genre1: "none",
                  genre2: "none",
                  genre3: "none",
                  genre4: "none",
                  genre5: "none",
                  genre6: "none",
                  genre7: "none",
                  year: 2015,
                  rate: 8.7,
                  url: "/play-page-1/A4.html",
                  msot: "movie"
                },

                {
                  id: 3,
                    img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/103eaca85fe8e0db784e1f1f52dfdf088c8291c3eaa7a4dbef0217a34306aea1._RI_TTW_.jpg",
                    title: "Mob Psycho 100<br>Cậu bé siêu năng lực",
                    letter: "m",
                    genre1: "none",
                    genre2: "none",
                    genre3: "none",
                    genre4: "none",
                    genre5: "none",
                    genre6: "none",
                    genre7: "none",
                    year: 2016,
                    rate: 7.3,
                    url: "/play-page-1/A3.html",
                    msot: "movie"
                  },

                  {
                    id: 2,
                      img: "https://images.thedirect.com/media/article_full/spider-verse-posters_VMqW9U1.jpg",
                      title: "Spider Man: Across spider verse<br>Người Nhện: Du hành đa vũ trụ",
                      letter: "s",
                      genre1: "none",
                      genre2: "none",
                      genre3: "none",
                      genre4: "none",
                      genre5: "none",
                      genre6: "none",
                      genre7: "none",
                      year: 2023,
                      rate: 8.8,
                      url: "/play-page-1/A2.html",
                      msot: "movie"
                    },

                    {
                      id: 1,
                        img: "https://img-zlr1.tv360.vn/image1/2022/09/23/11/4d903cf2/4d903cf2-cb6c-4d5e-839b-208bbe7d8623_640_360.jpg",
                        title: "Jujutsu Kaisen<br>Chú Thuật Hồi Chiến ",
                        letter: "J",
                        genre1: "none",
                        genre2: "none",
                        genre3: "none",
                        genre4: "none",
                        genre5: "none",
                        genre6: "none",
                        genre7: "none",
                        year: 2020,
                        rate: 8.5,
                        url: "/play-page-1/A1.html",
                        msot: "movie"
                      },


]

let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
});


























