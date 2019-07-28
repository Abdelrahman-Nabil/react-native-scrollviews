import React, { Component } from 'react'
import { Button, View, ScrollView,Text, StyleSheet, Image, Dimensions, RefreshControl } from 'react-native'
import * as actions from '../redux/actions'
import {connect} from 'react-redux'

let { width, height } = Dimensions.get('window')
class ListScreen extends Component {

  state = {currentPage: 1, refreshing: false}
  renderItems = () => {
   let props = this.props
   let isRTL = props.isRTL == 'RTL'

   return props.items.map((item, index) => {
     return (
       <View style = {styles.container}>
        <Image
          source = {{uri: item.url}}
          style = {styles.imgStyle}
        />
        <View style = {styles.itemFooter}>
          <Text style = {styles.textStyle}>{isRTL ? item.translation : item.description}</Text>
          <Button style = {{flex: 1}} title = "ANY ACTION HERE" onPress = {() => {}}/>
        </View>
       </View>
     )
   })
  }
  renderGrid = () => {
    let props = this.props
    let isRTL = props.isRTL == 'RTL'
    console.log(`isRTL: ${isRTL}`)
    return props.items.map((item, index) => {
      return (
        <View style = {{flexDirection: 'row', flex: 1}}>
          <View style = {styles.container}>
           <Image
             source = {{uri: item.url}}
             style = {styles.gridImgStyle}
           />
           <View style = {styles.itemFooter}>
             <Text style = {styles.gridTextStyle}>{isRTL ? item.translation : item.description}</Text>
             <Button title = "ACTION" onPress = {() => {}}/>
           </View>
          </View>
          {index + 1 < props.items.length && <View style = {styles.container}>
           <Image
             source = {{uri: props.items[index + 1].url}}
             style = {styles.gridImgStyle}
           />
           <View style = {styles.itemFooter}>
             <Text style = {styles.gridTextStyle}>{isRTL ? props.items[index + 1].translation : props.items[index + 1].description}</Text>
             <Button title = "ACTION" onPress = {() => {}}/>
           </View>
          </View>}
        </View>
      )
    })

  }
  componentDidMount(){
    this.props.loadActions()
  }
  componentWillMount(){
    this.props.RTLActions()
  }
  onEndReached(){
    this.props.loadActions()
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }
  componentWillReceiveProps(nextProps){
    console.log(`nextProps.isRTL ${nextProps.isRTL}`)
    this.setState({
      refreshing: false
    })
  }
  onScroll = (evt) => {
    let axis = this.props.orientation == 'horizontal' ? evt.nativeEvent.contentOffset.x : evt.nativeEvent.contentOffset.y
    console.log(axis)
    if(axis >= (1000 * this.state.currentPage)){
       this.onEndReached()
        console.log('almost bottom reached')
    }
  }

  _onRefresh() {
		this.setState(
			{
				refreshing: true,

			},
			() => {
				this.props.loadActions('refresh')

			}
		)
	}

  render(){
    return (
      <View style = {styles.container}>
        <ScrollView
          horizontal = {this.props.orientation == 'horizontal'}
          onScroll = {this.onScroll}
          refreshControl = {
            <RefreshControl
              progressViewOffset={120}
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
             />
          }
        >
        {this.props.orientation == 'grid' ? this.renderGrid() : this.renderItems()}
        </ScrollView>
      </View>
    )
  }
}
mapStateToProps = (state) => {
  return {
    items: state.items,
    isRTL: state.isRTL
  }
}
export default connect(mapStateToProps, actions)(ListScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
    flex: 1,

  },
  gridTextStyle: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 10,
    marginRight: 10
  },
  imgStyle: {
    width: width * 0.9,
    height: height * 0.5
  },
  gridImgStyle: {
    width: width * 0.45,
    height: width * 0.45
  },
  itemFooter: {
    flexDirection: 'row',
    paddingVertical: 5
  }

});
