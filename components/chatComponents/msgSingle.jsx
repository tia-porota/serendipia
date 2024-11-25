import { View, Text, StyleSheet } from "react-native";
import { TempUserIcon } from "../utils/icons";
export default function MsgSingle() {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={{ flexDirection: "row" }}>
          <TempUserIcon />
          <Text style={styles.text}>username</Text>
        </View>
        <View>
          <Text style={styles}>hoy</Text>
        </View>
      </View>
      <View>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          incidunt nostrum officia velit, cum consequuntur nesciunt iure ea eum
          nemo labore inventore molestias dolorem, aliquam officiis dolores
          veniam, aperiam ut. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptates corporis, sapiente nam nemo eos, suscipit
          harum voluptatibus a ipsam tempora temporibus explicabo dolor.
          Pariatur nam alias commodi distinctio. Commodi, impedit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis ea corporis
          eligendi quibusdam esse fuga et obcaecati amet harum odit voluptatum,
          aliquid voluptas cum corrupti rem autem pariatur quidem eveniet.
          Repellat porro accusantium optio ea, at harum vitae quas, sed cum
          nobis est, ipsa totam tempore. Eaque, est. Fugit beatae accusantium,
          illum quae vero maiores. Iusto explicabo vero porro omnis. Ut commodi
          quo doloremque aperiam quia placeat, et quidem culpa voluptatum fugiat
          deserunt cum accusantium, dignissimos quibusdam voluptatibus!
          Voluptatum, qui explicabo! Cupiditate earum eius tempora temporibus,
          vero animi necessitatibus ea.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    paddingVertical: 4,
    justifyContent: "space-between",
  },
  container: {
    padding: 10,
  },
  text: {
    paddingHorizontal: 10,
  },
});
