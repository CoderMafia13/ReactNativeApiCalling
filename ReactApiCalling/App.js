
import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:true
    };  
  }
  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7e73a6310cfb09799ecd1994b0df2987&language=en-US&page=1')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading:false,
        dataSource:responseJson.results, 
      },function(){});
    })
    .catch((error) => {
      console.error(error);
    });
  }
          
  render() {
    return (     
       <View style={{flex:1}}>
      <FlatList
          data={this.state.dataSource}
        renderItem={({item}) => 
        <Text style={{
              borderBottomWidth:1,
              paddingLeft:10,
              borderTopWidth:1,
              color:'#000000',
              backgroundColor:"cyan",
              borderColor:'#606060',
              fontSize:20,
              height:55,
              textAlign:'left',
              textAlignVertical:'center',
              fontFamily:'Times New Roman'}}>
              {item.title}
              </Text>
        
        }
        keyExtractor={ (item, index) => index.toString()}/>
                    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
