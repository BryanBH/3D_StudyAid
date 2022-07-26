import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
export default function NewPlaylist() {
	const navigate = useNavigate();
	const location = useLocation();
	const accessToken = location.state.accessToken;
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [genre, setGenre] = useState("");
	const [artist, setArtist] = useState("");
	const [isPublic, setIsPublic] = useState(false);

	async function createPlaylist() {
		await axios
			.post("http://localhost:5500/createPlaylist", {
				accessToken,
				params: {
					name,
					description,
					genre,
					artist, 
					isPublic,
				},
			})
			.catch((err) => {
				console.log(err);
			});
	}
	function handleSubmit(event) {
		event.preventDefault();
		createPlaylist();
		event.target.reset();

		navigate("/results", { state: { accessToken: accessToken } });
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
					color: "Black",
				}}>
				<div
					className="d-flex justify-content-center align-items-center"
					style={{ height: "100%" }}>
					<Form
						className="p-3 text-align-center"
						style={{
							border: "1px solid black",
							borderRadius: "10%",
							boxShadow: "2px 2px 2px black",
							width: "20%",
							height: "50%",
						}}
						onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Playlist Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Playlist Name"
								onChange={(evt) => setName(evt.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Playlist Description</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Playlist Description"
								onChange={(evt) =>
									setDescription(evt.target.value)
								}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Purpose</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Playlist purpose spereated by commas"
								onChange={(evt) => setGenre(evt.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicText">
							<Form.Label>Artists</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Genre/Artists spereated by commas"
								onChange={(evt) => setArtist(evt.target.value)}
							/>
						</Form.Group>

						<Form.Group
							className="mb-3 "
							controlId="formBasicCheckBox">
							<Form.Check
								type="checkbox"
								label="Check for private playlist"
								onChange={() => setIsPublic(!isPublic)}
							/>
						</Form.Group>
						<Button
							className=" ml-3 d-flex justify-content-center align-items-center"
							type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</Container>
		</>
	);
}
