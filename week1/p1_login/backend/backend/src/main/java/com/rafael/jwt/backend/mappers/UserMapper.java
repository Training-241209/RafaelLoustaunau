package com.rafael.jwt.backend.mappers;

import com.rafael.jwt.backend.dtos.SignUpDto;
import com.rafael.jwt.backend.dtos.UserDto;
import com.rafael.jwt.backend.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}