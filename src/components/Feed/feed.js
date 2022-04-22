import { useEffect, useState } from "react";
import "./Feed.css";

function Feed() {
	const [posts, setPosts] = useState([""]);

	const getPosts = async () => {
		let res = await fetch("https://picsum.photos/v2/list?page=2&limit=9");
		let data = await res.json();
		console.log(data);
		setPosts(data);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className="feed">
				{posts.map((post) => {
					return(
					<img 
					// key={post.id} 
					src={post.download_url} 
					/>
				)})}
		</div>
					)
				};

export default Feed;
