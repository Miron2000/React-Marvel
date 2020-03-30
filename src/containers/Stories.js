import React from 'react';
import StoriesContent from '../components/StoriesContent.jsx';
import { apiKey, hash } from '../config';


const api = 'http://gateway.marvel.com/v1/public/';

class Stories extends React.Component{
    state ={
stories:[]
    }

componentDidMount(){
this.fetchStories()
}

fetchStories = async () => {
    const data = await fetch(`${api}stories?ts=1&apikey=${apiKey}&hash=${hash}`);
const json = await data.json();
console.log(json);
this.setState({
    stories:json.data.results,
});
}






    render(){
        return(
            <div>
               {this.state.stories.map(item => <StoriesContent story={item} key={item.id}/>)} 
            </div>
        )
    }

}
export default Stories;