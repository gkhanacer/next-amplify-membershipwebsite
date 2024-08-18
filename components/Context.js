import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";


const Context = () => {
    
    return (
      <>
        <View marginBottom="135px">
          <Hero handleClick={() => {}} />
        </View>
        <View>
          <Testimonies />
        </View>
        <Flex justifyContent={"center"}>
          <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
        </Flex>
        <View marginTop="50px" marginBottom="50px">
          <Footer />
        </View>
      </>  
      );
};

export default Context;