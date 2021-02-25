import React, { Component } from 'react'
import './Search.css'
export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            result: []
        }
        this.search = this.search.bind(this);
        this.isearch = this.isearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    isearch() {
        fetch("https://the-cocktail-db.p.rapidapi.com/search.php?s=" + this.state.name, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf",
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    result: data.drinks
                })
                console.log(data);
            }
            );
    }
    search() {
        let a = document.getElementById("name");
        a.value = ""
        this.isearch();
        setTimeout(() => {
            console.log(this.state.result.length);
            
            if(this.state.result.length==0){
                let x = document.getElementById("show")
                x.classList="close"
            }else{
                let x = document.getElementById("show")
                x.classList="open"
            }
        }, 2000);
    }
    render() {
        const { result } = this.state
        console.log(this.state.name)
        return (
            <div>
                <input id="name" name="name" onChange={this.onChange} type="text" />
                <button onClick={this.search}>search</button>
                <div id="show" className="close">
                    <div>
                        {
                    result.map(result =>
                        
                        <div key={result.idDrink}>
                            <span>{this.state.name}</span>
                            <div>
                            <img src={result.strDrinkThumb} alt=""/>
                            </div>
                            <div>
                                <span>{result.strDrink}</span>
                            </div>
                        </div>
                    )
                }
                    </div>
                </div>
            </div>
        )
    }
}
