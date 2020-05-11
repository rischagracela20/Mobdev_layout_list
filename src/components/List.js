import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        // this.state = {
        //     students: [
        //         {
        //             id: 1,
        //             name: 'John',
        //             faculty: 'Computer Science'
        //         },
        //         {
        //             id: 2,
        //             name: 'Jane',
        //             faculty: 'Business'
        //         },
        //         {
        //             id: 3,
        //             name: 'Bob',
        //             faculty: 'Nurse'
        //         },
        //         {
        //             id: 4,
        //             name: 'Mike',
        //             faculty: 'Computer Science'
        //         }
        //     ],
        //     refreshing: false
        // }

        this.state = {
            users: [],
            refreshing: false
        }
    }

//     renderItem = (student) => <Text key= {student.id}>{student.name}</Text>
    
//     render(){
//         const listStudents = this.state.students.map(this.renderItem)
//         return(
//             <View>
//                 {listStudents}
//             </View>
//         )
//     }
// }

    renderItem = ({item}) => (
    // <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000' }}>
    //     <Text>Name: {item.name}</Text>    
    //     <Text>Faculty: {item.faculty}</Text>
    // </View>

    <View style={{ flex: 1, flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#000' }}>
        <Image 
            source= {{uri: `https://robohash.org/${item.id}?set=set1&size=150x150`}}
            style= {{ width: 50, height: 50 }}
        />
        <View>
            <Text>Name: {item.name}</Text>    
            <Text>Username: {item.username}</Text>
        </View>
    </View>
    )

    onRefresh = () => {
        this.getDataApi();
        //this.setState({ refreshing: true })
        // const data = this.state.students.concat({id: 5, name: 'Jordan', faculty: 'Business'})
        // this.setState({
        //     refreshing: false,
        //     students: data 
        // })
    }

    componentDidMount = () => {
       this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({ refreshing: true })
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => this.setState({ users: json, refreshing: false }))
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        this.setState({ users: json, refreshing: false })
    }
    
    render(){
        //console.log(this.state.users);
        return(
            // <View>
            //     <FlatList
            //         data={this.state.students}
            //         keyExtractor={item => item.id.toString()}
            //         renderItem= {this.renderItem}
            //         refreshing= {this.state.refreshing}
            //         onRefresh= {this.onRefresh}
            //     />
            // </View>

            <View>
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {this.renderItem}
                    refreshing= {this.state.refreshing}
                    onRefresh= {this.onRefresh}
                    showsVerticalScrollIndicator= {false}
                />
            </View>
        )
    }
}

export default List; 