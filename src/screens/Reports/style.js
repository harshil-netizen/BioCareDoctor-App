import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
  },
  wrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  scrollWrapper: {
    width,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 30
    // backgroundColor: 'pink',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 35,
    marginTop: 10
  },
  uName: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontSize: 22,
    lineHeight: 30,
  },
  upperWrapper2: {
    width: '100%',
    height: height * 0.01,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 35
  },
  uName2: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 14,
    lineHeight: 22,
  },
  textInputStyle: {
    height: 45,
    width: "90%",
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 30,
    borderColor: '#29E093',
    backgroundColor: '#FFFFFF'
  },
  //........................................................................................................//
  reportSpecsWrapper: {
    width: '99%',
    display: 'flex',
    flexDirection: 'row',
  },
  reportdetailImg: {
    width: width * 0.19,
    height: width * 0.19,
  },
  reportNameWrapper: {
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5
  },
  reportNameText: {
    fontFamily: 'Helvetica Neue',
    color: '#000',
    fontSize: width * 0.04,
    fontWeight: 'normal',
    paddingBottom: 1,
  },
  reportExpText: {
    color: '#898A8F',
    fontSize: width * 0.033,
    marginTop: 10,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  reportCardWrapper: {
    width,
    marginTop: height * 0.020,
    marginBottom: 10,
  },
  reportDetailedWrapper: {
    width: width * 0.9,
    height: height * 0.20,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: height * 0.01,
    borderRadius: 15,
    shadowColor: 'rgba(1, 1, 1, 1)',
    elevation: 4,
    marginLeft: 20,
  },
  middleWrapper: {
    width: '92%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  boxBtn2: {
    width: width * 0.30,
    height: height * 0.06,
    display: 'flex',
    backgroundColor: '#29E093',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: width * 0.09,
    marginTop: width * 0.03
  },
  btnText: {
    fontWeight: 'normal',
    textShadowColor: '#000000',
    fontSize: 20,
    color: '#FFFFFF'
  },
  upperCont: {
    width: '100%',
    height: height * 0.07,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // backgroundColor: 'maroon',
  },
  arrowCont: {
    width: width * 0.15,
    height: height * 0.03,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.02,
    // backgroundColor: 'pink',
  },
});