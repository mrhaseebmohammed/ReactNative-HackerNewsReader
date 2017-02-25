import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import StoryDetail from './StoryDetail';

class StoriesList extends Component {
    state = { stories: [] };


    componentWillMount() {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => this.pullData(response.data));
    }

    pullData(arr)
    {
        arr.forEach(function(element) {
            axios.get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
                .then(response => this.addToState(response.data))
        }, this);
        
    }

    addToState(obj)
    {
        this.setState({ 
    stories: this.state.stories.concat([obj])
})
    }
    


    renderStories() {
        console.log(this.state.stories)
        return this.state.stories.map(story =>
        <StoryDetail key={story.id} story={story} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderStories()}
            </ScrollView>
        );
    }
}

export default StoriesList;