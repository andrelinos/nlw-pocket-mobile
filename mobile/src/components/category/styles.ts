import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
	container: {
		height: 36,
		backgroundColor: colors.gray[100],
		borderWidth: 1,
		borderColor: colors.gray[300],
		borderRadius: 8,
		paddingHorizontal: 12,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 10,
	},

	name: {
		fontSize: 14,
		color: colors.gray[500],
		fontFamily: fontFamily.regular,
	},
	containerSelected: {
		backgroundColor: colors.green[500],
		borderColor: colors.green[500],
	},
	nameSelected: {
		color: colors.gray[100],
	},
});
