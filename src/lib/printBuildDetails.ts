import buildData from '../build-details.json';

const getTimestamp = () => {
	if (typeof buildData.build_timestamp === 'number') {
		const timestamp = new Date(buildData.build_timestamp)
		return timestamp.toString();
	} else {
		return "unknown"
	}
}

export default function printBuildDetails() {
	console.group("Build details");
	console.info(`build_id: ${buildData.build_id}`);
	console.info(`build_commit: ${buildData.build_commit}`);
	console.info(`build_user: ${buildData.build_user}`);
	console.info(`build_timestamp: ${getTimestamp()}`);
	console.groupEnd();
}