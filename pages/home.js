import Header from "../components/Header";

const HomeFage = () => {
    return `
    ${Header()}
    <main>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1684785459021-761c8ee14e49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" class="d-block w-full h-80 object-cover" alt="laptop" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <section class="posts-section">
        <div class="container">
          <h1 class="with-underline text-center">Latest posts</h1>
          <!-- search input -->
          <div class="input-group flex-nowrap pb-3 mx-3">
            <span class="input-group-text" id="search">Search</span>
            <input type="text"  id="searchInput" class="form-control" placeholder="Name post" aria-label="Username" aria-describedby="addon-wrapping">
          </div>
          <!-- Post list -->
          <ul id="postList" class="row posts-list justify-content-center">
             <li class="col-12 col-md-6 col-lg-4">
              <div class="post-item mb-4">
                <div class="card">
                  <img
                    src="images/recipe.jpg"
                    class="card-img-top"
                    alt="recipe"
                    onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
                  />

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>

                    <p class="card-text">
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                    </p>

                    <p class="card-text">
                      <small class="text-muted">by</small>
                      <small class="text-muted font-weight-bold">Phi Truong</small>
                      <small class="text-muted">- 3 mins ago</small>
                    </p>
                  </div>
                </div>

                <div class="post-item-menu">
                  <div class="menu-item rounded-circle">
                    <i class="fas fa-pen"></i>
                  </div>
                  <div class="menu-item rounded-circle">
                    <i class="fas fa-trash"></i>
                  </div>
                </div>
              </div>
            </li> 

            <li class="col-12 col-md-6 col-lg-4">
            <div class="post-item mb-4">
              <div class="card">
                <img
                  src="images/recipe.jpg"
                  class="card-img-top"
                  alt="recipe"
                  onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
                />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>

                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </p>

                  <p class="card-text">
                    <small class="text-muted">by</small>
                    <small class="text-muted font-weight-bold">Phi Truong</small>
                    <small class="text-muted">- 3 mins ago</small>
                  </p>
                </div>
              </div>

              <div class="post-item-menu">
                <div class="menu-item rounded-circle">
                  <i class="fas fa-pen"></i>
                </div>
                <div class="menu-item rounded-circle">
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            </div>
          </li> 

          <li class="col-12 col-md-6 col-lg-4">
          <div class="post-item mb-4">
            <div class="card">
              <img
                src="images/recipe.jpg"
                class="card-img-top"
                alt="recipe"
                onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
              />

              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <p class="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>

                <p class="card-text">
                  <small class="text-muted">by</small>
                  <small class="text-muted font-weight-bold">Phi Truong</small>
                  <small class="text-muted">- 3 mins ago</small>
                </p>
              </div>
            </div>

            <div class="post-item-menu">
              <div class="menu-item rounded-circle">
                <i class="fas fa-pen"></i>
              </div>
              <div class="menu-item rounded-circle">
                <i class="fas fa-trash"></i>
              </div>
            </div>
          </div>
        </li> 

        <li class="col-12 col-md-6 col-lg-4">
        <div class="post-item mb-4">
          <div class="card">
            <img
              src="images/recipe.jpg"
              class="card-img-top"
              alt="recipe"
              onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
            />

            <div class="card-body">
              <h5 class="card-title">Card title</h5>

              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>

              <p class="card-text">
                <small class="text-muted">by</small>
                <small class="text-muted font-weight-bold">Phi Truong</small>
                <small class="text-muted">- 3 mins ago</small>
              </p>
            </div>
          </div>

          <div class="post-item-menu">
            <div class="menu-item rounded-circle">
              <i class="fas fa-pen"></i>
            </div>
            <div class="menu-item rounded-circle">
              <i class="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </li> 

      <li class="col-12 col-md-6 col-lg-4">
      <div class="post-item mb-4">
        <div class="card">
          <img
            src="images/recipe.jpg"
            class="card-img-top"
            alt="recipe"
            onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
          />

          <div class="card-body">
            <h5 class="card-title">Card title</h5>

            <p class="card-text">
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </p>

            <p class="card-text">
              <small class="text-muted">by</small>
              <small class="text-muted font-weight-bold">Phi Truong</small>
              <small class="text-muted">- 3 mins ago</small>
            </p>
          </div>
        </div>

        <div class="post-item-menu">
          <div class="menu-item rounded-circle">
            <i class="fas fa-pen"></i>
          </div>
          <div class="menu-item rounded-circle">
            <i class="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </li> 

    <li class="col-12 col-md-6 col-lg-4">
    <div class="post-item mb-4">
      <div class="card">
        <img
          src="images/recipe.jpg"
          class="card-img-top"
          alt="recipe"
          onerror="this.onerror=null;this.src='https://picsum.photos/1368/400';"
        />

        <div class="card-body">
          <h5 class="card-title">Card title</h5>

          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>

          <p class="card-text">
            <small class="text-muted">by</small>
            <small class="text-muted font-weight-bold">Phi Truong</small>
            <small class="text-muted">- 3 mins ago</small>
          </p>
        </div>
      </div>

      <div class="post-item-menu">
        <div class="menu-item rounded-circle">
          <i class="fas fa-pen"></i>
        </div>
        <div class="menu-item rounded-circle">
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
  </li> 
          </ul>

          <!-- Posts pagination -->
          <nav class="posts-nav" aria-label="Posts navigation">
            <ul id="postsPagination" class="pagination justify-content-center ps-0">
              <li class="page-item">
                <a class="page-link" href="" aria-label="Previous">
                  <span aria-hidden="true">&laquo; Prev</span>
                </a>
              </li>
              <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li> -->
              <li class="page-item">
                <a class="page-link" href="" aria-label="Next">
                  <span aria-hidden="true">Next &raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </main>
    `;
}
export default HomeFage;