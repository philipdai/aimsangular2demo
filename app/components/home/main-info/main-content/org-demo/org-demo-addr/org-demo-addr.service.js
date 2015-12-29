export default class OrgDemoAddrService {
  addAddr(addresses, newAddr) {
    addresses.push(newAddr);
    return addresses;
  }

  deleteAddr(addresses, addrToDelete) {
    return addresses.filter(address => address !== addrToDelete);
  }
}
