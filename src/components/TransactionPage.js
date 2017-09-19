import React from 'react';
import TransactionPageLayout from './TransactionPageLayout';
import NavbarComponent from './NavbarComponent';
import ActionBarTransactionComponent from './ActionBarTransactionComponent';
import TransactionTableComponent from './TransactionTableComponent';
import FooterComponent from './FooterComponent';

export default function TransactionPage({
  pageTitle,
  pages,
  transactions,
  selectedTransactionIds
}) {
  return (
    <TransactionPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <ActionBarTransactionComponent />
      <TransactionTableComponent
        transactions={transactions}
        selectedTransactionIds={selectedTransactionIds}
      />
      <FooterComponent pageTitle={pageTitle} />
    </TransactionPageLayout>
  );
}
