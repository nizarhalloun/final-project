import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const CollapseRow = ({ open, volunteers }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Table size="small" aria-label="purchases">
              <TableBody>
                {volunteers.map(({ name, number, isArrivalConfirmed }) => (
                  <TableRow key={name}>
                    <TableCell>{isArrivalConfirmed.toString()}</TableCell>
                    <TableCell>{number}</TableCell>
                    <TableCell>{name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};

CollapseRow.propTypes = {
  open: PropTypes.bool.isRequired,
  volunteers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      isArrivalConfirmed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default CollapseRow;
