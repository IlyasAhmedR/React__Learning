import './home.scss'
const Home = () => {
  return (
    <>
    {/* menu starts  */}
    <section id="our_menu" className="pt-5 pb-5">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="page_title text-center mb-4">
						<h1>our menu</h1>
						<div className="single_line"></div>
					</div>
				</div> 
			</div>
			<div className="row">
        {/* tabs  */}
				<ul className="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab">Breakfast</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Lunch</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab">Dinner</a>
					</li>
				</ul>
      </div>
      {/* tabs data  */} 
			<div className="row">
				<div className="tab-content col-lg-12" id="myTabContent">
					<div className="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
						<div className="row">
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"></img>
									<div className="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"></img>
									<div className="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"></img>
									<div className="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/TAq7lDR.jpg" alt="burger"></img>
									<div className="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"></img>
									<div className="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"></img>
									<div className="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
						<div className="row">
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/Aowufa1.jpg" alt="pizza"></img>
									<div className="menu_content">
										<h4>12" Pizza  <span>$35</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/DJlmZDJ.jpg" alt="salad"></img>
									<div className="menu_content">
										<h4>Salad <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/knnQm7e.jpg" alt="green tea"></img>
									<div className="menu_content">
										<h4>green tea <span>$15</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"></img>
									<div className="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"></img>
									<div className="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"></img>
									<div className="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
						<div className="row">
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"></img>
									<div className="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"></img>
									<div className="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"></img>
									<div className="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"></img>
									<div className="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"></img>
									<div className="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"></img>
									<div className="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div className="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"></img>
									<div className="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a href="#" className=" menu_btn btn btn-danger">view more</a>
			</div>
		</div>
	</section>
    </>
  )
}

export default Home