import React from "react";
import { Container, Form } from "react-bootstrap";

export default function NewPlaylist() {

	

    function createPlaylist() {
        
    }
	return (
		<>
			<Container
				fluid
				style={{
					height: "100vh",
					position: "absolute",
					width: "100%",
					top: "0",
					left: "0",
					zIndex: "20",
					color: "White",
				}}>
                <Form onSubmit={createPlaylist}>
                    <h1>page</h1>
                </Form>
			</Container>
		</>
	);
}
