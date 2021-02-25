import React, { Component } from 'react'
export class Kokteyl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coctail: [],
            sayac: 0
        }
        this.connection = this.connection.bind(this);
    }
    connection() {
        fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin", {
           
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a25114065cmshf78c52b4a091da9p1481d6jsndfdbcabb6cbf",
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    coctail: data.drinks
                })
            }
            );

    };
    componentDidMount() {
        this.connection();
    }
    render() {
        const { coctail } = this.state
        return (
            <div>
                {

                    coctail.slice(0, 12).map(coctail =>
                        
                        <div key={coctail.idDrink}>
                            <div>
                            <img src={coctail.strDrinkThumb} alt=""/>
                            </div>
                            <div>
                                <span>{coctail.strDrink}</span>
                            </div>
                        </div>
                    )
                }
            </div>

        )
    }
}
