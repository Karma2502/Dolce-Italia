import React, {useState} from 'react' 
import { View } from 'react-native' 
import { Input, Icon, Button } from '@rneui/base' 
import { Form, useFormik } from 'formik'; 
import { initialValues } from './LoginForm.Data'
import { validationSchema } from './LoginForm.Data'; 
import { styles } from './LoginFORM.style'; 
 
const LoginForm = () => { 
 
  const [showPassword, setShowPassword] = useState(false); 
 
  const formik = useFormik({ 
      initialValues:initialValues(), 
      validationSchema: validationSchema(), 
      validateOnChange: false, 
      onSubmit:(formValue)=>{ 
        console.log("Formulario"); 
        console.log(formValue); 
      }, 
  }); 
 
  const showHiddenPassword=()=>{ 
    setShowPassword(!showPassword); 
  } 
 
  const HiddenPassword=()=>{ 
    setPassword(!Password); 
  } 
 
  return ( 
    <View style={styles.content}> 
       <Input 
          placeholder='Correo Electronicoooooooooooooooooooo' 
          containerStyle={styles.input} 
          rightIcon={ 
            <Icon type="material-community" name="at" iconStyle={styles.icon} />
          }  
          onChangeText={(text)=>formik.setFieldValue("email" , text)} 
          errorMessage={formik.errors.email} 
        /> 
        <Input 
          placeholder='Contraseña' 
          containerStyle={styles.input} 
          secureTextEntry={showPassword ? false : true} 
          rightIcon={ 
            <Icon type='material-community' name={showPassword ? "eye-off-outline" : "eye-outline"} iconStyle={styles.icon} onPress={showHiddenPassword} /> 
          }  
          onChangeText={(text)=>formik.setFieldValue("password" , text)} 
          errorMessage={formik.errors.password} 
        /> 
      <Button  
        containerStyle={styles.btnContainer}  
        buttonStyle={styles.btnLogin}  
        size="md"   
        onPress={formik.handleSubmit}  
        title="Iniciar Sesión"/> 
    </View> 
  ) 
} 
 
export default LoginForm;
