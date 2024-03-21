import { useAppSelector } from "./reduxHooks";


const useMeeting = () => {
	const meeting = useAppSelector((store) => store.global.meeting);

	const meeting_list = useAppSelector((store) => store.global.meeting_list);
	const newMeeting = useAppSelector((store) => store.global.newMeeting);

	// const updateMeetingInformation = useCallback(
	// 	(payload: any) => {
	// 		console.log("payload", payload);
	// 		dispatch(updateMeetingAction(payload));
	// 	},
	// 	[dispatch]
	// );

	return { meeting, meeting_list, newMeeting };
};

export default useMeeting;
