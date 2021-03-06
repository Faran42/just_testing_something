import React, {Component} from 'react';
import Auth0 from 'react-native-auth0';
import {Button, View, TextInput, Modal, Text, Image} from 'react-native';
import {Token} from "./state";
import {AgileHOC} from "@agile-ts/react";


const auth0 = new Auth0({
  domain: 'dev-jinboo.us.auth0.com',
  clientId: 'E9q37EFvghyqA1Y2kuf1QloNxJVzfASL'
});

class Auth extends Component {
  
  constructor() {
    super();
    this.state = {
      phone: '',
      code: '',
      codeRequestSent: false,
      LogginIn: false,
      isLoggedin: false, 
      image: '',
      accessToken: '',
      idToken: '',
    };
    
    this.loginUser = this.loginUser.bind(this);
    this.getLoginCode = this.getLoginCode.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.Func1 = this.Func1.bind(this);
    this.resetToken = this.resetToken.bind(this);

  }

  resetToken(){
    Token.set('');
    this.props.navigation.navigate('page')
  }

  Func1(){
    Token.set(this.state.idToken);
    this.props.navigation.navigate('page')
  }
  
  getLoginCode() {
    this.setState({LogginIn: true});
    auth0.auth
      .passwordlessWithSMS({
        phoneNumber: this.state.phone,
      })
      .then(() => {
        this.setState({codeRequestSent: true});
      })
      .catch(console.error);
  }

  loginUser() {
    auth0.auth
      .loginWithSMS({
        phoneNumber: this.state.phone,
        code: this.state.code,
        scope: "offline_access"
      })
      .then(response => {
        console.log("refreshToken: ", response.refreshToken);
        //aqui exemplo de refresh token
        auth0.auth.refreshToken({refreshToken: response.refreshToken}).then(response => {
          console.log(response)
        })
        .catch(console.error);
        this.setState({
          image: response.picture,
          accessToken: response.accessToken,
          idToken: response.idToken,
          isLoggedin: true,
        });
      })
      .catch(console.error);
  }

  logoutUser() {
    //To logout, just clear the access tokens
    this.setState({
      accessToken: '',
      idToken: '',
      isLoggedin: false,
      LogginIn: false,
      codeRequestSent: false
    });
  }

  render() {
    const {
      codeRequestSent,
      LogginIn,
      code,
      isLoggedin,
      accessToken,
      idToken,
    } = this.state;
    return (
      <View>
        {!codeRequestSent ? (
          <>
            <TextInput
              style={{
                borderColor: 'blue',
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                padding: 10,
              }}
              placeholder="Coloque seu telefone:"
              onChangeText={text => this.setState({phone: text})}
            />
            <Button
              style={{padding: 10, marginBottom: 5}}
              title={LogginIn ? 'Processando...' : 'Pegar c??digo'}
              onPress={this.getLoginCode}
              
            />
            <Button
              style={{padding: 10, marginBottom: 5}}
              title={'Reset Token'}
              onPress={this.resetToken}
              
            />
            
          </>
        ) : (
          <>
            <TextInput
              style={{
                borderColor: 'blue',
                borderWidth: 1,
                borderRadius: 5,
                height: 40,
                padding: 10,
                marginBottom: 5,
                marginTop: 30,
              }}
              placeholder="Entre com o C??digo"
              value={code}
              onChangeText={text => this.setState({code: text})}
            />
            <Button title="Login" onPress={this.loginUser} />

            <View style={{flex: 1}}>
              <Modal transparent={true} visible={isLoggedin}>
                <View style={{backgroundColor: '#000000aa', flex: 1}}>
                  <View
                    style={{
                      backgroundColor: '#ffffff',
                      margin: 50,
                      padding: 40,
                      borderRadius: 10,
                    }}>
                    <Text> Parab??ns! Voc?? entrou no Jinboo! ???????????? {'\n'}</Text>

                    <Text> Here are your details:{'\n'}</Text>
                    <Text>
                      AccessToken: {' ' + accessToken}
                      {'\n'}
                    </Text>
                    <Text>
                      IDToken:
                      {' ' + idToken.length > 200
                        ? `${idToken.substring(0, 200)}...`
                        : idToken}
                      {'\n'}
                    </Text>

                    <Button
                      style={{padding: 10, marginBottom: 5}}
                      title={'Back'}
                      onPress={this.Func1}
                      
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </>
        )}
      </View>
    );
  }
}
export default AgileHOC(Auth, [Token]);
