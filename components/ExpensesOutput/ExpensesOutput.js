import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPESNES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-04-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 29.49,
    date: new Date('2022-03-09'),
  },
  {
    id: 'e3',
    description: 'A pair of trousers',
    amount: 19.4,
    date: new Date('2022-03-26'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 9.1,
    date: new Date('2022-02-06'),
  },
  {
    id: 'e5',
    description: 'New trimmer',
    amount: 100.0,
    date: new Date('2022-02-06'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-04-19'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 29.49,
    date: new Date('2022-03-09'),
  },
  {
    id: 'e8',
    description: 'A pair of trousers',
    amount: 19.4,
    date: new Date('2022-03-26'),
  },
  {
    id: 'e9',
    description: 'A Book',
    amount: 9.1,
    date: new Date('2022-02-06'),
  },
  {
    id: 'e10',
    description: 'New trimmer',
    amount: 100.0,
    date: new Date('2022-02-06'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPESNES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPESNES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
