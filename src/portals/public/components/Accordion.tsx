import * as React from "react";
import { styled } from "@mui/material/styles";
import { FaChevronDown } from "react-icons/fa";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	paddingTop: 10,
	paddingBottom: 10,
	borderRadius: 10,

	"&:not(:last-child)": {
		// borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		{...props}
		expandIcon={<FaChevronDown className="text-black" />}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? "transparent" : "transparent",
	flexDirection: "row",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	fontsize: 20,
	color: "#596067",
	// borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	const data = [
		{
			id: 1,
			header: "What is Krext?",
			desc: "Krext is a platform designed to provide organizations with a seamless meeting experience. It allows users to schedule, host, and join meetings effortlessly. You can create an account, set up your organization, invite members, and start hosting meetings in just a few clicks.",
		},
		{
			id: 2,
			header: "How does billing work for Krext?",
			desc: "Billing for Krext is typically based on a subscription model, with pricing tiers based on the number of users and additional features required. We offer flexible billing options and can accommodate the needs of organizations of all sizes. Detailed pricing information can be found on our website or by contacting our sales team.",
		},
		{
			id: 3,
			header:
				"Can I integrate Krext with my existing calendar and productivity tools?",
			desc: "Absolutely!Krext offers seamless integration with popular calendar applications such as Google Calendar, Outlook, and others. This allows you to schedule meetings directly from your preferred calendar interface and receive reminders seamlessly.",
		},
		{
			id: 4,
			header: "Is Krext secure?",
			desc: "Yes, security is a top priority for us. We employ robust encryption protocols to ensure that all meetings and data transmitted through our platform are secure. Additionally, meeting rooms can be password-protected, and access can be controlled by the meeting host.",
		},
		{
			id: 5,
			header: "What metrics and analytics are available on Krext?",
			desc: "Krext provides comprehensive metrics and analytics to help organizations track meeting performance. This includes data on meeting attendance, duration, participant engagement, and more. Administrators can access these insights through the dashboard to optimize meeting efficiency and effectiveness.",
		},
		{
			id: 6,
			header: "How can I join multiple organizations on Krext?",
			desc: "joining multiple organizations on our platform is simple. After creating an account, you can navigate to the settings section and choose the option to join a new organization. Enter the organization's unique identifier or request an invitation from the organization's administrator.",
		},
	];

	return (
		<div>
			{data.map((item) => {
				const active = expanded === `panel${item.id}`;
				return (
					<Accordion
						sx={{
							border: active ? "1px solid #041492" : "",
						}}
						expanded={active}
						onChange={handleChange(`panel${item.id}`)}>
						<AccordionSummary
							aria-controls="panel1d-content"
							id="panel1d-header">
							<Typography
								fontWeight="700"
								color={`${active ? "#041492" : "#000"}`}>
								{item.header}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{item.desc}</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
}
