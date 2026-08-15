import * as XLSX from 'xlsx';

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
