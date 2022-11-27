import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import College from './components/College.jsx';
const { colleges } = require('./colleges.json');

//initialization...
let firstPage = [];
let pageCount = 0
for (let index = pageCount; index <= pageCount + 9; index++)
  firstPage.push(colleges[index]);
pageCount += 9;


class App extends Component {

  state = {
    items: firstPage,
    pageCount: pageCount,
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length === colleges.length) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      let maxCount;
      let pageCount = this.state.pageCount;
      let nextPage = [];

      if ((colleges.length - 1) - pageCount >= 10)
        maxCount = pageCount + 10;
      else
        maxCount = colleges.length;

      for (let index = pageCount + 1; index <= maxCount; index++)
        nextPage.push(colleges[index]);

      console.log(nextPage);

      this.setState({
        items: this.state.items.concat(nextPage), pageCount: maxCount
      });
    }, 2000);
  };

  render() {
    return (
      <div className="Page">
        <span className="Page-header">
          Colleges in North India
        </span>
        {console.log(this.state.hasMore)}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="College-list">
            {this.state.items.map((college, index) =>
              <div key={`College-#${index + 1}`} className="Colleges">
                <College college={college}></College>
              </div>
            )}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
