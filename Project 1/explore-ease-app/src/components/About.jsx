import React from "react";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";

export function AboutUs() {
    return (
        <>
        <NavigationBar></NavigationBar>
        <body class="AboutUsbody" style={{ height: '300vh' }}>
            <section className="section-white mt-5">
                <div className="container_text-center" style={{ background: '#fff', paddingBottom: '20px' }}>
                    <h1>About Us</h1>
                    <p>Who are we</p>
                    <Container>
                        <h5>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus libero sapiente maxime expedita odio, non, voluptate, perferendis architecto eius deserunt quaerat debitis enim corporis? At quia numquam officia maxime porro!
                            
                        </h5>
                        <h5>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi enim odio eaque maiores ipsa reprehenderit vitae natus non, quidem iste voluptas quisquam aspernatur delectus! Magni quod provident iste ex sint!
                        </h5>
                    </Container>
                </div>
            </section>
        </body>
        </>
    )
}