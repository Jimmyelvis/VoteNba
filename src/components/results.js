import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  //TODO: assign this.store.getState().* to variables

  votesCelticsInPercent() {
    if (this.store.getState().cetlics) {
      return (
        (this.store.getState().cetlics /
          (this.store.getState().cetlics +
            this.store.getState().warriors +
            this.store.getState().sixers +
            this.store.getState().raptors +
            this.store.getState().lakers 
          )) *
        100
      );
    } else {
      return 0;
    }
  }

  votesWarriorsInPercent() {
    if (this.store.getState().warriors) {
      return (
        (this.store.getState().warriors /
          (this.store.getState().cetlics +
            this.store.getState().warriors +
            this.store.getState().sixers +
            this.store.getState().raptors +
            this.store.getState().lakers 
          )) *
        100
      );
    } else {
      return 0;
    }
  }

  votesSixersInPercent() {
    if (this.store.getState().sixers) {
      return (
        (this.store.getState().sixers /
          (this.store.getState().cetlics +
            this.store.getState().warriors +
            this.store.getState().sixers +
            this.store.getState().raptors +
            this.store.getState().lakers 
          )) *
        100
      );
    } else {
      return 0;
    }
  }

  
  votesRaptorsInPercent() {
    if (this.store.getState().raptors) {
      return (
        (this.store.getState().raptors /
        (this.store.getState().cetlics +
          this.store.getState().warriors +
          this.store.getState().sixers +
          this.store.getState().raptors +
          this.store.getState().lakers 
        )) *
        100
      );
    } else {
      return 0;
    }
  }

  
  votesLakersInPercent() {
    if (this.store.getState().lakers) {
      return (
        (this.store.getState().lakers /
        (this.store.getState().cetlics +
          this.store.getState().warriors +
          this.store.getState().sixers +
          this.store.getState().raptors +
          this.store.getState().lakers 
        )) *
        100
      );
    } else {
      return 0;
    }
  }

  votesCelticsTotal() {
    if (this.store.getState().cetlics) {
      return this.store.getState().cetlics;
    }
  }

  votesWarriorsTotal() {
    if (this.store.getState().warriors) {
      return this.store.getState().warriors;
    }
  }

  votesSixersTotal() {
    if (this.store.getState().sixers) {
      return this.store.getState().sixers;
    }
  }

  
  votesRaptorsTotal() {
    if (this.store.getState().raptors) {
      return this.store.getState().raptors;
    }
  }
  
  votesLakersTotal() {
    if (this.store.getState().lakers) {
      return this.store.getState().lakers;
    }
  }


  votesCelticsInPercentStyle() {
    return {
      width: this.votesCelticsInPercent() + "%"
    };
  }

  votesWarriorsInPercentStyle() {
    return {
      width: this.votesWarriorsInPercent() + "%"
    };
  }

  votesSixersInPercentStyle() {
    return {
      width: this.votesSixersInPercent() + "%"
    };
  }

  
  votesRaptorsInPercentStyle() {
    return {
      width: this.votesRaptorsInPercent() + "%"
    };
  }

  
  votesLakersInPercentStyle() {
    return {
      width: this.votesLakersInPercent() + "%"
    };
  }

  render() {
    return (
      <div className="results">


        <div className="row">

            <div className="col-md-2 col-sm-2  col-xs-2 ">

              <span className="label label-celtics">
                CELTICS: {this.votesCelticsInPercent().toFixed(2) + "%"}
              </span>
              
            </div>

            
            <div className="col-md-3 col-sm-3 col-xs-9 col-xs-offset-1 ">

              <h4 className="celtics">
                Total: <span className="celtics-badge">{this.votesCelticsTotal()}</span>
              </h4>
            
            </div>


            <div className="col-md-12">

                <div className="progress progress-striped active">

                  <div
                    className="progress-bar progress-bar-celtics"
                    style={this.votesCelticsInPercentStyle()}
                  />
                      
                </div>
            
            </div>

        </div>
          {/* end of row */}

        
        <div className="row">

            <div className="col-md-2 col-sm-2  col-xs-2 ">

              <span className="label label-warriors">
                WARRIORS: {this.votesWarriorsInPercent().toFixed(2) + "%"}
              </span>
              
            </div>

            
            <div className="col-md-3 col-sm-3 col-xs-9 col-xs-offset-1 ">

              <h4 className="warriors">
                Total: <span className="warriors-badge">{this.votesWarriorsTotal()}</span>
              </h4>
                  
            </div>


            <div className="col-md-12">

                <div className="progress progress-striped active">
                  
                    <div
                      className="progress-bar progress-bar-warriors"
                      style={this.votesWarriorsInPercentStyle()}
                    />
                                
            
            </div>

        </div>


     </div> 
     {/* end of row */}

      <div className="row">

            <div className="col-md-2 col-sm-2  col-xs-2 ">

              <span className="label label-sixers">
                76ers: {this.votesSixersInPercent().toFixed(2) + "%"}
              </span>
              
            </div>


            <div className="col-md-3 col-sm-3 col-xs-9 col-xs-offset-1 ">

              <h4 className="sixers">
                Total: <span className="sixers-badge">{this.votesSixersTotal()}</span>
              </h4>
                  
            </div>


            <div className="col-md-12">

                <div className="progress progress-striped active">
                  
                    <div
                      className="progress-bar progress-bar-sixers"
                      style={this.votesSixersInPercentStyle()}
                    />
                                

            </div>

            </div>


        </div> 
        {/* end of row */}

        
        <div className="row">

            <div className="col-md-2 col-sm-2  col-xs-2 ">

              <span className="label label-raptors">
                Raptors: {this.votesRaptorsInPercent().toFixed(2) + "%"}
              </span>
              
            </div>


            <div className="col-md-3 col-sm-3 col-xs-9 col-xs-offset-1 ">

              <h4 className="raptors">
                Total: <span className="raptors-badge">{this.votesRaptorsTotal()}</span>
              </h4>
                  
            </div>


            <div className="col-md-12">

                <div className="progress progress-striped active">
                  
                    <div
                      className="progress-bar progress-bar-raptors"
                      style={this.votesRaptorsInPercentStyle()}
                    />
                                

            </div>

            </div>


        </div> 
        {/* end of row */}

        
        <div className="row">

            <div className="col-md-2 col-sm-2  col-xs-2 ">

              <span className="label label-lakers">
                Lakers: {this.votesLakersInPercent().toFixed(2) + "%"}
              </span>
              
            </div>


            <div className="col-md-3 col-sm-3 col-xs-9 col-xs-offset-1 ">

              <h4 className="lakers">
                Total: <span className="lakers-badge">{this.votesLakersTotal()}</span>
              </h4>
                  
            </div>


            <div className="col-md-12">

                <div className="progress progress-striped active">
                  
                    <div
                      className="progress-bar progress-bar-lakers"
                      style={this.votesLakersInPercentStyle()}
                    />
                                

            </div>

            </div>


        </div> 
        {/* end of row */}





    </div>

    );
  }
}

export default Results;
