import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Reusable function to format data for export
const formatDataForExport = (data) => {
  return data.map((item, index) => ({
    'S.No': index + 1,
    'Registration ID': item.id,
    'Full Name': item.fullName,
    'Email Address': item.email,
    'Contact Number': item.contactNumber,
    'PhonePe Number': item.phonePeNumber,
    'Registration Date': new Date(item.timestamp).toLocaleString(),
  }));
};

export const downloadCSV = (data) => {
  if (!data || data.length === 0) return;
  const formattedData = formatDataForExport(data);
  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
  
  const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `EarnPepe_Registrations_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadExcel = (data) => {
  if (!data || data.length === 0) return;
  const formattedData = formatDataForExport(data);
  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
  XLSX.writeFile(workbook, `EarnPepe_Registrations_${Date.now()}.xlsx`);
};

export const downloadPDF = (data) => {
  if (!data || data.length === 0) return;
  const doc = new jsPDF('landscape');
  
  doc.setFontSize(18);
  doc.text('EarnPepe Campaign - Registered Members', 14, 15);
  doc.setFontSize(11);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 23);

  const tableColumn = ["S.No", "Reg ID", "Full Name", "Email", "Contact", "PhonePe", "Date"];
  const tableRows = data.map((item, index) => [
    index + 1,
    item.id.split('-')[1] || item.id, // shorten ID for PDF
    item.fullName,
    item.email,
    item.contactNumber,
    item.phonePeNumber,
    new Date(item.timestamp).toLocaleDateString()
  ]);

  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 30,
    theme: 'grid',
    styles: { fontSize: 9, cellPadding: 2 },
    headStyles: { fillColor: [22, 163, 74] }, // Tailwind green-600
  });

  doc.save(`EarnPepe_Registrations_${Date.now()}.pdf`);
};
