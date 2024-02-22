import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { CardGroup, Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import '../Css/Home.css';
import { NavigationBar } from './NavigationBar';

function Home() {
    return (
        <div className="home-container">
            <NavigationBar></NavigationBar>
            <div className="search-container">
                <input
                    className="searchBox"
                    type="text"
                    placeholder="Search your Dream Place"
                />
                <FaSearch className="search-icon" size={24} />
            </div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.thequint.com/thequint/2017-12/05e8e3a6-795a-4479-beb1-37ff0b3afaf3/2.jpg?auto=format%2Ccompress"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Chhatrapati Shivaji Terminus, Mumbai</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://costoffliving.com/wp-content/uploads/2019/07/hawa-mahal.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Hawa Mahal, Jaipur</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://protravelguide.co.uk/wp-content/uploads/2012/03/Taj-Mahal.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Taj Mahal, Agra</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mediaim.expedia.com/destination/1/c198d1e4c64977db36ccf164f20747be.jpg"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h5>Golden Temple, Amritsar</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.4734c5f4305ca7dc14b7a9c9f9e7fe10?rik=gYNDKhwm8%2ffUsQ&riu=http%3a%2f%2filiketowastemytime.com%2fsites%2fdefault%2ffiles%2fkerala-india-fields-hd-wallpaper.jpg&ehk=gBhpLYXDbHGlmQnn8dd20nsaBgoEWBJxQKgtW1rMIQs%3d&risl=&pid=ImgRaw&r=0"
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h5>Tea Farm, Kerala</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <center>
                <div className="img-travel">
                    <img src="https://thumbs.dreamstime.com/b/india-icons-set-indian-attractions-line-design-tourism-isolated-vector-illustration-traditional-symbols-outline-black-thin-107968654.jpg" height={300} alt="lol" />
                    <br />
                    <h5>Explore-EASE</h5>
                    <h2 style={{ fontFamily: 'cursive' }}>Trending destinations</h2>
                </div>
            </center>

            <section className="agents">
                <Container>
                    <Row>
                        {/* Card 1 */}
                        <Col xs={12} md={4} lg={4} className="text-center">
                            <div style={{ width: "300px", margin: "0 auto" }}>
                                <Card className="card-img-top mb-3" style={{ position: 'relative' }}>
                                    <Card.Img variant="top" src="https://media.timeout.com/images/105371015/750/562/image.jpg" width="300" height="200" />
                                    <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>The Gateway of India</Card.Title>
                                </Card>
                            </div>
                        </Col>
                        {/* Card 2 */}
                        <Col xs={12} md={4} lg={4} className="text-center">
                            <div style={{ width: "300px", margin: "0 auto" }}>
                                <Card className="card-img-top mb-3" style={{ position: 'relative' }}>
                                    <Card.Img variant="top" src="https://www.kashmironline.com/blog/wp-content/uploads/2022/05/dal.jpg" width="300" height="200" />
                                    <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>Dal Lake</Card.Title>
                                </Card>
                            </div>
                        </Col>
                        {/* Card 2 */}
                        <Col xs={12} md={4} lg={4} className="text-center">
                            <div style={{ width: "300px", margin: "0 auto" }}>
                                <Card className="card-img-top mb-3" style={{ position: 'relative' }}>
                                    <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/21/full/1705861654-6152.jpg?im=FeatureCrop,size=(826,465)" width="300" height="200" />
                                    <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>Ayodhya</Card.Title>
                                </Card>
                            </div>
                        </Col>
                        {/* Card 3 */}
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <Card className="card-img-top" style={{ width: "300px", margin: "10px", position: 'relative' }}>
                                <Card.Img variant="top" src="https://images.herzindagi.info/image/2023/May/Meenakshi-Temple.jpg" width="300" height="200" />
                                <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>Meenakshi Temple</Card.Title>
                            </Card>
                        </Col>
                        {/* Card 4 */}
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <Card className="card-img-top" style={{ width: "300px", margin: "10px", position: 'relative' }}>
                                <Card.Img variant="top" src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Kutch.jpg" width="300" height="200" />
                                <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>Rann of Kutch</Card.Title>
                            </Card>
                        </Col>
                        {/* Card 5 */}
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <Card className="card-img-top" style={{ width: "300px", margin: "10px", position: 'relative' }}>
                                <Card.Img variant="top" src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" width="300" height="200" /> {/* Replace IMAGE_URL with the actual URL of your image */}
                                <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>New Delhi</Card.Title>
                            </Card>
                        </Col>
                        {/* Card 5 */}
                        <Col xs={12} md={3} lg={3} className="text-center">
                            <Card className="card-img-top" style={{ width: "300px", margin: "10px", position: 'relative' }}>
                                <Card.Img variant="top" src="https://media.assettype.com/fortuneindia/2023-04/5f63d73f-e123-4935-942b-0d4cb31e4391/Goa.jpg?w=1200&h=800" width="300" height="200" /> {/* Replace IMAGE_URL with the actual URL of your image */}
                                <Card.Title style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', width: "100%" }}>GOA</Card.Title>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
<br></br>
<br></br>

<center>
                <div className="img-travel">
                    <img src="https://www.msbrightspotsofhope.org/wp-content/uploads/2017/11/line-clipart-page-break-7.png" height={200} alt="lol" />
                    <br />
                    <h3>Explore-EASE</h3>
                    <h4>New Listing</h4>
                </div>
            </center>

            <br></br>
<CardGroup >        
<Col style={{ width: '300px', height: '30px' }}>
          <Card >
          <Card.Img  variant="top" src="https://www.bhaktibharat.com/photo/mandir/iskcon-temple-chowpatty/3.jpg" width="300" height="200" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: '300px', height: '600px' }}>
          <Card>
          <Card.Img  variant="top" src="https://www.activitymanali.com/images/activity_banner/1684211262.png" width="300" height="200"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: '300px', height: '500px' }}>
          <Card>
          <Card.Img  variant="top" src="https://www.visitdubai.com/-/media/gathercontent/poi/s/skydive-dubai/fallback-image/sky-dive-dubai-3.jpg" width="300" height="200"/>
 
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ width: '300px', height: '500px' }}>
          <Card>
          <Card.Img  variant="top" src="https://static.toiimg.com/photo/60763742.cms" width="300" height="200"/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </CardGroup>
            <center>
                <div className="img-travel">
                    <img src="https://thumbs.dreamstime.com/b/india-icons-set-indian-attractions-line-design-tourism-isolated-vector-illustration-traditional-symbols-outline-black-thin-107968654.jpg" height={300} alt="lol" />
                    <br />
                    <h3>Explore-EASE</h3>
                    <h4>New Listing</h4>
                </div>
            </center>

            <section className="agents" >
                <Row style={{ marginBottom: '200px' }}>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-img-top"
                            style={{ width: "300px", margin: "10px" }}>
                            <Card.Img
                                variant="top"
                                src="https://indiano.travel/wp-content/uploads/2022/09/Awesome-view-of-Pangong-lake-In-Ladakh.jpg" width="300" height="200" // Replace "URL_OF_YOUR_IMAGE" with the actual URL of your image
                                className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title>Leh Ladakh</Card.Title>
                                <Card.Text>
                                    Ladakh
                                </Card.Text>
                                <Button style={{ backgroundColor: "#4FC3F7" }}>Show Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-img-top"
                            style={{ width: "300px", margin: "10px" }}>
                            <Card.Img variant="top" src="https://assets-global.website-files.com/5b56319971ac8c7475a9d877/5ee481817da4561eb9621b3e_Radhanagar-.JPG" width="300" height="200" />
                            <Card.Body>
                                <Card.Title>Radhanagar Beach</Card.Title>
                                <Card.Text>
                                    Andaman
                                </Card.Text>
                                <Button style={{ backgroundColor: "#4FC3F7" }}>Show Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-img-top"
                            style={{ width: "300px", margin: "10px" }}>
                            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alleppey_beach.jpg/1200px-Alleppey_beach.jpg" width="300" height="200" />
                            <Card.Body>
                                <Card.Title>Alappuzha Beach</Card.Title>
                                <Card.Text>
                                    Kerala
                                </Card.Text>
                                <Button style={{ backgroundColor: "#4FC3F7" }}>Show Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-img-top" style={{ width: "300px", margin: "10px" }}>
                            <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/248420945.jpg?k=f23a29994a96cabe53e21adfeba466c45a25161c72eb771c2daeec25132a1baf&o=&hp=1" width="300" height="200" />
                            <Card.Body>
                                <Card.Title>Kufri</Card.Title>
                                <Card.Text>
                                    Shimla
                                </Card.Text>
                                <Button style={{ backgroundColor: "#4FC3F7" }}>Show Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

        </div>
    );
}

export default Home;
