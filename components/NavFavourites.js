import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "4 Glynburn Road, Hectorville SA, Australia",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "The University of Adelaide, Adelaide SA, Australia",
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={[tw`font-semibold text-lg`, { color: "red" }]}>
              {location}
            </Text>
            <Text>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
